import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

// 📤 Добавление отзыва
router.post("/add", async (req: any, res: any) => {
    try {
        const { name, position, text } = req.body;

        if (!name || !position || !text) {
            return res.status(400).json({ success: false, message: "Все поля обязательны" });
        }

        const review = await prisma.review.create({
            data: { name, position, text },
        });

        res.json({ success: true, review });
    } catch (error) {
        console.error("Ошибка при добавлении отзыва:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

// 📥 Получить все отзывы
router.get("/", async (_req, res) => {
    try {
        const reviews = await prisma.review.findMany({ orderBy: { createdAt: "desc" } });
        res.json({ success: true, reviews });
    } catch (error) {
        console.error("Ошибка при получении отзывов:", error);
        res.status(500).json({ success: false });
    }
});

// 🗑 Удаление отзыва
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.review.delete({
            where: { id },
        });

        res.json({ success: true });
    } catch (error) {
        console.error("Ошибка при удалении отзыва:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

// ✏️ Редактирование отзыва
router.put("/:id", async (req: any, res: any) => {
    const { id } = req.params;
    const { name, position, text } = req.body;

    if (!name || !position || !text) {
        return res.status(400).json({ success: false, message: "Все поля обязательны" });
    }

    try {
        const updated = await prisma.review.update({
            where: { id },
            data: { name, position, text },
        });

        res.json({ success: true, review: updated });
    } catch (error) {
        console.error("Ошибка при редактировании отзыва:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});

export default router;
