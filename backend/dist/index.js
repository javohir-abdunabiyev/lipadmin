"use strict";
// backend/src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes")); // ✅
const consultationRoutes_1 = __importDefault(require("./routes/consultationRoutes")); // ✅
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const JWT_SECRET = process.env.JWT_SECRET || "your_fallback_secret";
// Middleware
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
// 🔐 Admin login route
app.post("/api/admin/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ success: false, message: "Email и пароль обязательны" });
    try {
        const admin = await prisma_1.default.admin.findUnique({ where: { email } });
        if (!admin || admin.password !== password)
            return res.status(401).json({ success: false, message: "Неверные данные" });
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
        return res.json({ success: true, adminId: admin.id });
    }
    catch (err) {
        console.error("Ошибка логина:", err);
        return res.status(500).json({ success: false, message: "Ошибка на сервере" });
    }
});
// 🔐 Получение данных администратора
app.get("/api/admin/me", (req, res) => {
    const adminId = req.cookies.adminId;
    if (!adminId) {
        return res.status(401).json({ success: false, message: "Неавторизован" });
    }
    return res.json({ success: true, adminId });
});
// 📦 Роуты
app.use("/api/service", serviceRoutes_1.default);
app.use("/api/review", reviewRoutes_1.default); // ✅ отзывы
app.use("/api/consultation", consultationRoutes_1.default); // ✅ заявки
// 🚀 Запуск сервера
app.listen(port, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});
