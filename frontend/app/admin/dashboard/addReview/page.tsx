"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddReview() {
    const [adminId, setAdminId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const cookies = document.cookie.split(";").reduce((acc: Record<string, string>, pair) => {
            const [key, value] = pair.trim().split("=");
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});
        if (cookies.adminId) setAdminId(cookies.adminId);
        else setMessage("❌ Admin ID не найден в cookie");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !position.trim() || !text.trim() || !adminId.trim()) {
            setMessage("❌ Все поля обязательны");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, position, text, adminId }),
            });

            const data = await res.json();
            if (data.success) {
                setMessage("✅ Отзыв успешно добавлен");
                setName("");
                setPosition("");
                setText("");
            } else {
                setMessage(data.message || "❌ Ошибка при добавлении отзыва");
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ Произошла ошибка при добавлении отзыва");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-[#2a324c] p-6 rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-6">Добавить отзыв</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя *" required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Должность *" required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Текст отзыва *" required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Добавить отзыв</Button>
            </form>
            {message && <p className="mt-4 text-sm text-yellow-400">{message}</p>}
        </div>
    );
}