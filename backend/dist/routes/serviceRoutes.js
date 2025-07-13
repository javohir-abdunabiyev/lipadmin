"use strict";
// 📁 backend/routes/serviceRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const s3_1 = __importDefault(require("../lib/s3"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
// ➕ Добавление новой услуги
router.post("/add", upload.single("image"), async (req, res) => {
    try {
        const { title, description, price, days, adminId, keywords } = req.body;
        const options = JSON.parse(req.body.options || "[]");
        const benefits = JSON.parse(req.body.benefits || "[]");
        const purposes = JSON.parse(req.body.purposes || "[]");
        if (!title || !price || !days || !adminId) {
            return res.status(400).json({ success: false, message: "Обязательные поля не заполнены" });
        }
        let imageUrl = null;
        if (req.file) {
            const key = `services/${(0, uuid_1.v4)()}-${req.file.originalname}`;
            await s3_1.default.putObject({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: key,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
                ACL: "public-read",
            }).promise();
            imageUrl = `${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${key}`;
        }
        const service = await prisma_1.default.service.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                days: parseInt(days),
                imageUrl,
                keywords,
                admin: { connect: { id: adminId } },
                features: {
                    create: options.map((name) => ({ name })),
                },
                benefits: {
                    create: benefits.map((text) => ({ text })),
                },
                purposes: {
                    create: purposes.map((p) => ({
                        action: p.action,
                        detail: p.detail,
                    })),
                },
            },
            include: { features: true, benefits: true, purposes: true },
        });
        res.json({ success: true, service });
    }
    catch (error) {
        console.error("Ошибка при добавлении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при добавлении услуги" });
    }
});
// ✏️ Обновление услуги
router.put("/edit/:id", upload.single("image"), async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, price, days, keywords } = req.body;
        const features = JSON.parse(req.body.features || "[]");
        const benefits = JSON.parse(req.body.benefits || "[]");
        const purposes = JSON.parse(req.body.purposes || "[]");
        const existing = await prisma_1.default.service.findUnique({
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
                    await s3_1.default.deleteObject({
                        Bucket: process.env.AWS_BUCKET_NAME,
                        Key: oldKey,
                    }).promise();
                }
            }
            const newKey = `services/${(0, uuid_1.v4)()}-${req.file.originalname}`;
            await s3_1.default.putObject({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: newKey,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
                ACL: "public-read",
            }).promise();
            imageUrl = `${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${newKey}`;
        }
        await prisma_1.default.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma_1.default.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma_1.default.servicePurpose.deleteMany({ where: { serviceId: id } });
        const updated = await prisma_1.default.service.update({
            where: { id },
            data: {
                title,
                description,
                price: parseFloat(price),
                days: parseInt(days),
                imageUrl,
                keywords,
                features: {
                    create: features.map((f) => ({ name: f.name })),
                },
                benefits: {
                    create: benefits.map((text) => ({ text })),
                },
                purposes: {
                    create: purposes.map((p) => ({
                        action: p.action,
                        detail: p.detail,
                    })),
                },
            },
            include: { features: true, benefits: true, purposes: true },
        });
        res.json({ success: true, service: updated });
    }
    catch (error) {
        console.error("Ошибка при обновлении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при обновлении услуги" });
    }
});
// ❌ Удаление услуги
router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const existing = await prisma_1.default.service.findUnique({ where: { id } });
        if (!existing) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }
        if (existing.imageUrl) {
            const key = existing.imageUrl.split(`/${process.env.AWS_BUCKET_NAME}/`)[1];
            if (key) {
                await s3_1.default.deleteObject({
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: key,
                }).promise();
            }
        }
        await prisma_1.default.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma_1.default.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma_1.default.servicePurpose.deleteMany({ where: { serviceId: id } });
        await prisma_1.default.service.delete({ where: { id } });
        res.json({ success: true });
    }
    catch (error) {
        console.error("Ошибка при удалении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при удалении услуги" });
    }
});
// 📥 Получение всех услуг
router.get("/", async (req, res) => {
    try {
        const services = await prisma_1.default.service.findMany({
            include: { features: true, benefits: true, purposes: true },
        });
        res.json({ success: true, services });
    }
    catch (error) {
        console.error("Ошибка при получении услуг:", error);
        res.status(500).json({ success: false });
    }
});
// 📥 Получение одной услуги по ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const service = await prisma_1.default.service.findUnique({
            where: { id },
            include: { features: true, benefits: true, purposes: true },
        });
        if (!service) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }
        res.json({ success: true, service });
    }
    catch (error) {
        console.error("Ошибка при получении услуги по ID:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});
exports.default = router;
