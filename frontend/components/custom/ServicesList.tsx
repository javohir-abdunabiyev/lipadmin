// ✅ Файл ServicesList.tsx — отображение всех услуг с поддержкой purposes

"use client";

import { useEffect, useState } from "react";
import { Feature, Service } from "./types";
import ServiceCard from "./ServiceCard";
import EditServiceDialog from "./EditServiceDialog";

const fixedOptions: Feature[] = [
    { name: "Проектирование", icon: "/images/proektirov.png" },
    { name: "Настройка", icon: "/images/nastroyka.png" },
    { name: "Подключение", icon: "/images/podklucenie.png" },
    { name: "Поддержка", icon: "/images/support.png" },
    { name: "Обслуживание", icon: "/images/wrench.png" },
    { name: "Безопасность", icon: "/images/shield.png" },
    { name: "Оптимизация", icon: "/images/optimization.png" },
    { name: "Обновление", icon: "/images/refresh.png" },
    { name: "Стабильная работа", icon: "/images/podklucenie.png" },
    { name: "Установка", icon: "/images/install.png" },
    { name: "Сопровождение", icon: "/images/following.png" },
    { name: "Контроль", icon: "/images/control.png" },
    { name: "Внедрение", icon: "/images/tick.png" },
    { name: "Круглосуточный контроль", icon: "/images/control.png" },
];

export default function ServicesList() {
    const [services, setServices] = useState<Service[]>([]);
    const [selected, setSelected] = useState<Service | null>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`);
        const data = await res.json();
        setServices(data.services);
    };

    const handleDelete = async (id: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/delete/${id}`, {
            method: "DELETE",
        });
        if (res.ok) fetchServices();
    };

    return (
        <div className="p-10 bg-[#1a1f2e] min-h-screen text-white overflow-y-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Наши услуги</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onDelete={handleDelete}
                        onEdit={() => setSelected(service)}
                    />
                ))}
            </div>

            <EditServiceDialog
                service={selected}
                setService={setSelected}
                refetch={fetchServices}
                fixedOptions={fixedOptions}
            />
        </div>
    );
}
