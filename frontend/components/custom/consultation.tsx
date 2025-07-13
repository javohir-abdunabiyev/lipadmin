"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function Consul() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultation/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, agreed }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setName("");
                setPhone("");
                setAgreed(false);
            } else {
                setError(data.message || "Ошибка отправки");
            }
        } catch (err) {
            setError("Ошибка сервера");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center mt-[45px]">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="py-[20px] w-[300px] mb-[60px] h-[70px] px-[36px] rounded-[50px] hover:bg-[] border-[3px] border-[rgba(255,255,255,0.2)] cursor-pointer bg-[rgba(231,25,25,1)] font-semibold text-[20px]">
                        Получить консультацию
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white rounded-xl max-w-[327px] sm:max-w-[400px] px-6 py-8">
                    <DialogHeader>
                        <DialogTitle className="text-[25px] text-left font-[700] mb-[30px]">
                            Получить консультацию
                        </DialogTitle>
                    </DialogHeader>

                    {success ? (
                        <p className="text-green-600 text-center text-[16px] font-semibold">Заявка отправлена!</p>
                    ) : (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label htmlFor="name" className="text-[16px] mb-[4px]">Имя</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Например: Иван"
                                className="border mb-[18px] max-w-[344px] border-gray-300 px-4 py-2 rounded-md text-[16px] outline-none"
                                id="name"
                                required
                            />

                            <label htmlFor="tel" className="text-[16px] mb-[4px]">Номер телефона</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+ 7 (___) __ - __"
                                className="border mb-[18px] max-w-[344px] border-gray-300 px-4 py-2 rounded-md text-[16px] outline-none"
                                id="tel"
                                required
                            />

                            <label className="flex items-start gap-2 text-sm mb-[30px]">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-4 h-4 mt-[3px]"
                                    required
                                />
                                <div>
                                    Нажимая кнопку соглашаюсь с{" "}
                                    <a href="/policy" className="underline text-[rgba(70,138,201,1)] font-[400]">
                                        политикой <br /> конфиденциальности
                                    </a>
                                </div>
                            </label>

                            {error && (
                                <p className="text-red-600 text-[14px] mb-4">{error}</p>
                            )}

                            <Button
                                type="submit"
                                className="bg-[rgba(231,25,25,1)] text-white rounded-full h-[50px] text-[16px] font-semibold"
                                disabled={loading}
                            >
                                {loading ? "Отправка..." : "Отправить"}
                            </Button>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
