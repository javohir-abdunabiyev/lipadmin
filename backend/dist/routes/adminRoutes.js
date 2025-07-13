"use strict";
// 📁 backend/src/routes/adminRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_fallback_secret";
// 🔐 Авторизация администратора
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email и пароль обязательны",
        });
    }
    try {
        const admin = await prisma_1.default.admin.findUnique({
            where: { email },
        });
        if (!admin || admin.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Неверный email или пароль",
            });
        }
        const token = jsonwebtoken_1.default.sign({ adminId: admin.id }, JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.cookie("adminId", admin.id, {
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ success: true, adminId: admin.id });
    }
    catch (error) {
        console.error("Ошибка при логине:", error);
        res.status(500).json({
            success: false,
            message: "Ошибка сервера",
        });
    }
});
// 👤 Получение текущего админа (по куке)
router.get("/me", async (req, res) => {
    const adminId = req.cookies.adminId;
    if (!adminId) {
        return res.status(401).json({ success: false, message: "Неавторизован" });
    }
    try {
        const admin = await prisma_1.default.admin.findUnique({ where: { id: adminId } });
        if (!admin) {
            return res.status(404).json({ success: false, message: "Админ не найден" });
        }
        res.json({ success: true, admin });
    }
    catch (error) {
        console.error("Ошибка при получении админа:", error);
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
});
exports.default = router;
