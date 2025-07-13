"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type Consultation = {
    id: string;
    name: string;
    phone: string;
    agreed: boolean;
    finished: boolean;
    createdAt: string;
};

export default function ConsulPage() {
    const [consultations, setConsultations] = useState<Consultation[]>([]);

    useEffect(() => {
        fetchConsultations();
    }, []);

    const fetchConsultations = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultation`);
            const data = await res.json();
            if (data.success) {
                setConsultations(data.consultations);
            }
        } catch (err) {
            console.error("Ошибка при загрузке заявок:", err);
        }
    };

    const handleToggleFinished = async (id: string, current: boolean) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultation/update/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ finished: !current }),
            });

            const data = await res.json();
            if (data.success) {
                fetchConsultations();
            }
        } catch (err) {
            console.error("Ошибка при обновлении статуса:", err);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Вы уверены, что хотите удалить эту заявку?")) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultation/delete/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();
            if (data.success) {
                fetchConsultations();
            } else {
                console.error("Ошибка при удалении:", data);
            }
        } catch (err) {
            console.error("Ошибка при удалении заявки:", err);
        }
    };


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {consultations.map((c) => (
                <div
                    key={c.id}
                    className="bg-gradient-to-br from-[#2a324c] to-[#1f263a] rounded-2xl border border-[#3c4565] p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                            <p className="text-sm text-gray-300">{c.phone}</p>
                        </div>
                        <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => handleDelete(c.id)}
                        >
                            <Trash size={16} />
                        </Button>
                    </div>

                    <div className="text-sm space-y-2 mb-4">
                        <p className="text-gray-300">
                            <span className="font-semibold text-white">Согласие:</span>{" "}
                            {c.agreed ? "Да" : "Нет"}
                        </p>
                        <p className={`text-gray-300 ${c.finished ? "font-bold text-green-400" : "font-bold text-yellow-400"}`}>
                            <span className="text-white">Статус:</span>{" "}
                            {c.finished ? "Завершено" : "В работе"}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-semibold text-white">Дата подачи:</span>{" "}
                            {new Date(c.createdAt).toLocaleString("ru-RU")}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id={`finish-${c.id}`}
                            checked={c.finished}
                            onCheckedChange={() => handleToggleFinished(c.id, c.finished)}
                        />
                        <label htmlFor={`finish-${c.id}`} className="text-sm text-gray-200 cursor-pointer">
                            Завершен
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
}
