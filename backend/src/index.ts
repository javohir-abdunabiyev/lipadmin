// backend/src/index.ts

import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import prisma from "./lib/prisma";
import serviceRoutes from "./routes/serviceRoutes";
import reviewRoutes from "./routes/reviewRoutes"; // ✅
import consultationRoutes from "./routes/consultationRoutes"; // ✅

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const upload = multer({ storage: multer.memoryStorage() });
const JWT_SECRET = process.env.JWT_SECRET || "your_fallback_secret";

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));

// 🔐 Admin login route
app.post("/api/admin/login", async (req: any, res: any) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ success: false, message: "Email и пароль обязательны" });

    try {
        const admin = await prisma.admin.findUnique({ where: { email } });

        if (!admin || admin.password !== password)
            return res.status(401).json({ success: false, message: "Неверные данные" });

        const token = jwt.sign({ adminId: admin.id }, JWT_SECRET, { expiresIn: "7d" });

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
    } catch (err) {
        console.error("Ошибка логина:", err);
        return res.status(500).json({ success: false, message: "Ошибка на сервере" });
    }
});

// 🔐 Получение данных администратора
app.get("/api/admin/me", (req: any, res: any) => {
    const adminId = req.cookies.adminId;
    if (!adminId) {
        return res.status(401).json({ success: false, message: "Неавторизован" });
    }
    return res.json({ success: true, adminId });
});

// 📦 Роуты
app.use("/api/service", serviceRoutes);
app.use("/api/review", reviewRoutes); // ✅ отзывы
app.use("/api/consultation", consultationRoutes); // ✅ заявки

// 🚀 Запуск сервера
app.listen(port, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});
