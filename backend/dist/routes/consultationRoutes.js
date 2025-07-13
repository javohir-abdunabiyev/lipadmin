"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = express_1.default.Router();
router.post("/add", async (req, res) => {
    try {
        const { name, phone, agreed } = req.body;
        if (!name || !phone || typeof agreed !== "boolean") {
            return res.status(400).json({ success: false, message: "Все поля обязательны" });
        }
        if (!agreed) {
            return res.status(400).json({ success: false, message: "Необходимо согласие" });
        }
        const consultation = await prisma_1.default.consultationRequest.create({
            data: { name, phone, agreed },
        });
        res.json({ success: true, consultation });
    }
    catch (error) {
        console.error("Ошибка при создании запроса на консультацию:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});
// backend/routes/consultationRoutes.ts
router.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { finished } = req.body;
        const updated = await prisma_1.default.consultationRequest.update({
            where: { id },
            data: { finished },
        });
        res.json({ success: true, updated });
    }
    catch (error) {
        console.error("Ошибка при обновлении заявки:", error);
        res.status(500).json({ success: false });
    }
});
// Удалить заявку
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.consultationRequest.delete({
            where: { id },
        });
        res.json({ success: true });
    }
    catch (error) {
        console.error("Ошибка при удалении заявки:", error);
        res.status(500).json({ success: false });
    }
});
//  Получить все заявки
router.get("/", async (_req, res) => {
    try {
        const consultations = await prisma_1.default.consultationRequest.findMany({ orderBy: { createdAt: "desc" } });
        res.json({ success: true, consultations });
    }
    catch (error) {
        console.error("Ошибка при получении заявок:", error);
        res.status(500).json({ success: false });
    }
});
exports.default = router;
