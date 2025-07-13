// frontend/app/admin/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [keywords, setKeywords] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [adminId, setAdminId] = useState("");
    const [message, setMessage] = useState("");

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [benefits, setBenefits] = useState<string[]>([]);
    const [benefitInput, setBenefitInput] = useState("");

    const [purposes, setPurposes] = useState<{ action: string; detail: string }[]>([]);
    const [purposeAction, setPurposeAction] = useState("");
    const [purposeDetail, setPurposeDetail] = useState("");

    const fixedOptions = [
        "Проектирование", "Настройка", "Подключение", "Поддержка", "Обслуживание",
        "Безопасность", "Оптимизация", "Обновление", "Стабильная работа",
        "Установка", "Сопровождение", "Контроль", "Внедрение", "Круглосуточный контроль",
    ];

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
        if (!title.trim() || !price.trim() || !days.trim() || !adminId.trim()) {
            setMessage("❌ Заполните все обязательные поля"); return;
        }
        if (!image) { setMessage("❌ Загрузите изображение"); return; }
        if (selectedOptions.length === 0) {
            setMessage("❌ Выберите хотя бы одну характеристику"); return;
        }
        if (benefits.length === 0) {
            setMessage("❌ Добавьте хотя бы одно преимущество"); return;
        }
        if (purposes.length === 0) {
            setMessage("❌ Добавьте хотя бы одно назначение"); return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("days", days);
        formData.append("adminId", adminId);
        formData.append("keywords", keywords);
        formData.append("options", JSON.stringify(selectedOptions));
        formData.append("benefits", JSON.stringify(benefits));
        formData.append("purposes", JSON.stringify(purposes));
        formData.append("image", image);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/add`, {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setMessage("✅ Услуга успешно добавлена!");
                setTitle(""); setDescription(""); setPrice(""); setDays("");
                setImage(null); setSelectedOptions([]); setBenefits([]); setKeywords("");
                setPurposes([]); setPurposeAction(""); setPurposeDetail("");
            } else {
                setMessage(data.message || "❌ Ошибка при добавлении");
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ Произошла ошибка при добавлении");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-[#2a324c] p-6 rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-6">Добавить услугу</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок *" required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <div className="flex gap-4">
                    <input type="number" placeholder="Цена *" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                    <input type="number" placeholder="Срок (дней) *" value={days} onChange={(e) => setDays(e.target.value)} required className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                </div>
                <input type="text" placeholder="Ключевые слова (через запятую)" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="w-full bg-[#1e263a] border p-2 rounded text-white" />
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="text-sm text-gray-400" required />

                <div>
                    <label className="block mb-1 text-sm font-medium">Характеристики *</label>
                    <div className="grid grid-cols-2 gap-2">
                        {fixedOptions.map((name) => (
                            <label key={name} className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(name)}
                                    onChange={(e) => {
                                        if (e.target.checked) setSelectedOptions([...selectedOptions, name]);
                                        else setSelectedOptions(selectedOptions.filter((v) => v !== name));
                                    }}
                                />
                                <span>{name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Преимущества *</label>
                    <div className="flex gap-2">
                        <input type="text" value={benefitInput} onChange={(e) => setBenefitInput(e.target.value)} className="flex-1 bg-[#1e263a] border p-2 rounded text-white" />
                        <Button type="button" onClick={() => {
                            if (benefitInput.trim()) {
                                setBenefits([...benefits, benefitInput.trim()]);
                                setBenefitInput("");
                            }
                        }}>+</Button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {benefits.map((b, idx) => (
                            <button key={idx} type="button" onClick={() => setBenefits(benefits.filter((_, i) => i !== idx))} className="bg-blue-700 px-2 py-1 rounded text-xs hover:bg-red-600">
                                {b} ✕
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Назначения *</label>
                    <div className="flex gap-2 mb-2">
                        <input type="text" placeholder="Краткое название" value={purposeAction} onChange={(e) => setPurposeAction(e.target.value)} className="flex-1 bg-[#1e263a] border p-2 rounded text-white" />
                        <input type="text" placeholder="Описание" value={purposeDetail} onChange={(e) => setPurposeDetail(e.target.value)} className="flex-1 bg-[#1e263a] border p-2 rounded text-white" />
                        <Button type="button" onClick={() => {
                            if (purposeAction.trim() && purposeDetail.trim()) {
                                setPurposes([...purposes, { action: purposeAction.trim(), detail: purposeDetail.trim() }]);
                                setPurposeAction(""); setPurposeDetail("");
                            }
                        }}>+</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {purposes.map((p, idx) => (
                            <div key={idx} className="bg-blue-700 px-2 py-1 rounded text-xs flex items-center gap-2">
                                <span>{p.action}: {p.detail}</span>
                                <button type="button" onClick={() => setPurposes(purposes.filter((_, i) => i !== idx))} className="text-red-400 hover:text-red-600">✕</button>
                            </div>
                        ))}
                    </div>
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Добавить услугу</Button>
            </form>
            {message && <p className="mt-4 text-sm text-yellow-400">{message}</p>}
        </div>
    );
}
