// 📁 backend/routes/serviceRoutes.ts

import express from "express";
import multer from "multer";
import s3 from "../lib/s3";
import prisma from "../lib/prisma";
import { v4 as uuid } from "uuid";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// ➕ Добавление новой услуги
router.post("/add", upload.single("image"), async (req: any, res: any) => {
    try {
        const { title, description, price, days, adminId, keywords } = req.body;
        const options = JSON.parse(req.body.options || "[]");
        const benefits = JSON.parse(req.body.benefits || "[]");
        const purposes = JSON.parse(req.body.purposes || "[]");

        if (!title || !price || !days || !adminId) {
            return res.status(400).json({ success: false, message: "Обязательные поля не заполнены" });
        }

        let imageUrl: string | null = null;

        if (req.file) {
            const key = `services/${uuid()}-${req.file.originalname}`;
            await s3.putObject({
                Bucket: process.env.AWS_BUCKET_NAME!,
                Key: key,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
                ACL: "public-read",
            }).promise();

            imageUrl = `${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${key}`;
        }

        const service = await prisma.service.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                days: parseInt(days),
                imageUrl,
                keywords,
                admin: { connect: { id: adminId } },
                features: {
                    create: options.map((name: string) => ({ name })),
                },
                benefits: {
                    create: benefits.map((text: string) => ({ text })),
                },
                purposes: {
                    create: purposes.map((p: any) => ({
                        action: p.action,
                        detail: p.detail,
                    })),
                },
            },
            include: { features: true, benefits: true, purposes: true },
        });

        res.json({ success: true, service });
    } catch (error) {
        console.error("Ошибка при добавлении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при добавлении услуги" });
    }
});

// ✏️ Обновление услуги
router.put("/edit/:id", upload.single("image"), async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const { title, description, price, days, keywords } = req.body;
        const features = JSON.parse(req.body.features || "[]");
        const benefits = JSON.parse(req.body.benefits || "[]");
        const purposes = JSON.parse(req.body.purposes || "[]");

        const existing = await prisma.service.findUnique({
            where: { id },
            include: { features: true, benefits: true, purposes: true },
        });

        if (!existing) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }

        let imageUrl = existing.imageUrl;

        if (req.file) {
            if (existing.imageUrl) {
                const oldKey = existing.imageUrl.split(`/${process.env.AWS_BUCKET_NAME}/`)[1];
                if (oldKey) {
                    await s3.deleteObject({
                        Bucket: process.env.AWS_BUCKET_NAME!,
                        Key: oldKey,
                    }).promise();
                }
            }

            const newKey = `services/${uuid()}-${req.file.originalname}`;
            await s3.putObject({
                Bucket: process.env.AWS_BUCKET_NAME!,
                Key: newKey,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
                ACL: "public-read",
            }).promise();

            imageUrl = `${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${newKey}`;
        }

        await prisma.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma.servicePurpose.deleteMany({ where: { serviceId: id } });

        const updated = await prisma.service.update({
            where: { id },
            data: {
                title,
                description,
                price: parseFloat(price),
                days: parseInt(days),
                imageUrl,
                keywords,
                features: {
                    create: features.map((f: any) => ({ name: f.name })),
                },
                benefits: {
                    create: benefits.map((text: string) => ({ text })),
                },
                purposes: {
                    create: purposes.map((p: any) => ({
                        action: p.action,
                        detail: p.detail,
                    })),
                },
            },
            include: { features: true, benefits: true, purposes: true },
        });

        res.json({ success: true, service: updated });
    } catch (error) {
        console.error("Ошибка при обновлении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при обновлении услуги" });
    }
});

// ❌ Удаление услуги
router.delete("/delete/:id", async (req: any, res: any) => {
    try {
        const id = req.params.id;

        const existing = await prisma.service.findUnique({ where: { id } });

        if (!existing) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }

        if (existing.imageUrl) {
            const key = existing.imageUrl.split(`/${process.env.AWS_BUCKET_NAME}/`)[1];
            if (key) {
                await s3.deleteObject({
                    Bucket: process.env.AWS_BUCKET_NAME!,
                    Key: key,
                }).promise();
            }
        }

        await prisma.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma.servicePurpose.deleteMany({ where: { serviceId: id } });
        await prisma.service.delete({ where: { id } });

        res.json({ success: true });
    } catch (error) {
        console.error("Ошибка при удалении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при удалении услуги" });
    }
});

// 📥 Получение всех услуг
router.get("/", async (req, res) => {
    try {
        const services = await prisma.service.findMany({
            include: { features: true, benefits: true, purposes: true },
        });
        res.json({ success: true, services });
    } catch (error) {
        console.error("Ошибка при получении услуг:", error);
        res.status(500).json({ success: false });
    }
});

// 📥 Получение одной услуги по ID
router.get("/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;

        const service = await prisma.service.findUnique({
            where: { id },
            include: { features: true, benefits: true, purposes: true },
        });

        if (!service) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }

        res.json({ success: true, service });
    } catch (error) {
        console.error("Ошибка при получении услуги по ID:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

export default router;
