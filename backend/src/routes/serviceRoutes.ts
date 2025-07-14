import express from "express";
import multer from "multer";
import s3 from "../lib/s3";
import prisma from "../lib/prisma";
import { v4 as uuid } from "uuid";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// 🔠 Генерация slug
function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[\s_]+/g, "-")
        .replace(/[^\w\-а-яё]/gi, "")
        .replace(/--+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/ё/g, "e")
        .replace(/а/g, "a")
        .replace(/б/g, "b")
        .replace(/в/g, "v")
        .replace(/г/g, "g")
        .replace(/д/g, "d")
        .replace(/е/g, "e")
        .replace(/ж/g, "zh")
        .replace(/з/g, "z")
        .replace(/и/g, "i")
        .replace(/й/g, "y")
        .replace(/к/g, "k")
        .replace(/л/g, "l")
        .replace(/м/g, "m")
        .replace(/н/g, "n")
        .replace(/о/g, "o")
        .replace(/п/g, "p")
        .replace(/р/g, "r")
        .replace(/с/g, "s")
        .replace(/т/g, "t")
        .replace(/у/g, "u")
        .replace(/ф/g, "f")
        .replace(/х/g, "h")
        .replace(/ц/g, "c")
        .replace(/ч/g, "ch")
        .replace(/ш/g, "sh")
        .replace(/щ/g, "sch")
        .replace(/ъ/g, "")
        .replace(/ы/g, "y")
        .replace(/ь/g, "")
        .replace(/э/g, "e")
        .replace(/ю/g, "yu")
        .replace(/я/g, "ya");
}

// ➕ Добавление услуги
router.post("/add", upload.single("image"), async (req: any, res: any) => {
    try {
        const {
            title,
            description,
            price,
            days,
            adminId,
            keywords,
        } = req.body;

        const options = JSON.parse(req.body.options || "[]"); // features
        const benefits = JSON.parse(req.body.benefits || "[]");
        const purposes = JSON.parse(req.body.purposes || "[]");

        const file = req.file;
        if (!file) {
            return res.status(400).json({ success: false, message: "Изображение не загружено" });
        }

        const extension = file.originalname.split(".").pop();
        const key = `services/${uuid()}.${extension}`;

        // Загружаем изображение в S3
        await s3.putObject({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        }).promise();

        const imageUrl = `${process.env.S3_ENDPOINT}/${key}`;

        // Генерация slug
        const slug = title.toLowerCase()
            .replace(/[^a-zа-я0-9]+/gi, "-")
            .replace(/^-+|-+$/g, "")
            .replace(/--+/g, "-");

        // Сохраняем услугу и связи
        const service = await prisma.service.create({
            data: {
                title,
                slug,
                description,
                price: parseFloat(price),
                days: parseInt(days),
                imageUrl,
                keywords,
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
            include: {
                features: true,
                benefits: true,
                purposes: true,
            },
        });

        return res.status(200).json({ success: true, service });
    } catch (error) {
        console.error("Ошибка при добавлении услуги:", error);
        return res.status(500).json({ success: false, message: "Ошибка на сервере" });
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
            // Удалить старое изображение
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

        // Удалить старые фичи, преимущества и цели
        await prisma.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma.servicePurpose.deleteMany({ where: { serviceId: id } });

        const slug = slugify(title);

        const updated = await prisma.service.update({
            where: { id },
            data: {
                title,
                slug,
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

// 📥 Получение всех услуг
router.get("/", async (req, res) => {
    try {
        const services = await prisma.service.findMany({
            include: { features: true, benefits: true, purposes: true },
            orderBy: { createdAt: "desc" },
        });
        res.json({ success: true, services });
    } catch (error) {
        console.error("Ошибка при получении списка услуг:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

// 📄 Получение одной услуги по slug
router.get("/:slug", async (req: any, res: any) => {
    try {
        const { slug } = req.params;

        const service = await prisma.service.findFirst({
            where: { slug },
            include: { features: true, benefits: true, purposes: true },
        });

        if (!service) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }

        res.json({ success: true, service });
    } catch (error) {
        console.error("Ошибка при получении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

// 🗑 Удаление услуги
router.delete("/delete/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;

        const service = await prisma.service.findUnique({
            where: { id },
        });

        if (!service) {
            return res.status(404).json({ success: false, message: "Услуга не найдена" });
        }

        // Удалить изображение из S3
        if (service.imageUrl) {
            const key = service.imageUrl.split(`/${process.env.AWS_BUCKET_NAME}/`)[1];
            if (key) {
                await s3.deleteObject({
                    Bucket: process.env.AWS_BUCKET_NAME!,
                    Key: key,
                }).promise();
            }
        }

        // Удалить связанные записи
        await prisma.serviceFeature.deleteMany({ where: { serviceId: id } });
        await prisma.serviceBenefit.deleteMany({ where: { serviceId: id } });
        await prisma.servicePurpose.deleteMany({ where: { serviceId: id } });

        // Удалить саму услугу
        await prisma.service.delete({
            where: { id },
        });

        res.json({ success: true });
    } catch (error) {
        console.error("Ошибка при удалении услуги:", error);
        res.status(500).json({ success: false, message: "Ошибка при удалении" });
    }
});

export default router;
