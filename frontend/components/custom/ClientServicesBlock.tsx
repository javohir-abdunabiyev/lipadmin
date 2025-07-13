"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ⬅️ добавляем

type Feature = { name: string };
type Benefit = { text: string };

type Service = {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    features: Feature[];
    benefits: Benefit[];
};

const featureIconMap: Record<string, string> = {
    "Проектирование": "/images/proektirov.png",
    "Настройка": "/images/nastroyka.png",
    "Подключение": "/images/podklucenie.png",
    "Поддержка": "/images/support.png",
    "Обслуживание": "/images/wrench.png",
    "Безопасность": "/images/shield.png",
    "Оптимизация": "/images/optimization.png",
    "Обновление": "/images/refresh.png",
    "Стабильная работа": "/images/podklucenie.png",
    "Установка": "/images/install.png",
    "Сопровождение": "/images/following.png",
    "Контроль": "/images/control.png",
    "Внедрение": "/images/tick.png",
    "Круглосуточный контроль": "/images/control.png",
};

export default function ServicesBlock() {
    const [services, setServices] = useState<Service[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`);

                if (res.status === 404) {
                    router.push("/not-found");
                    return;
                }

                const data = await res.json();

                if (data.success) {
                    setServices(data.services);
                } else {
                    router.push("/not-found");
                }
            } catch (error) {
                console.error("Ошибка при загрузке услуг:", error);
                router.push("/not-found"); 
            }
        };

        fetchServices();
    }, [router]);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            {services.map((service) => (
                <Link href={`/service/${service.id}`} key={service.id}>
                    <div className="h-full flex flex-col bg-white border-[2px] border-gray-200 px-[14px] pt-[14px] rounded-xl shadow-md !text-left hover:shadow-lg transition-shadow">
                        {service.imageUrl ? (
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                className="object-contain"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 rounded-full" />
                        )}

                        <div className="px-[21px] pb-[28px]">
                            <h3 className="font-bold text-[24px] mb-[20px] text-black">
                                {service.title}
                            </h3>

                            <p className="text-[16px] mb-[20px]">{service.description}</p>

                            <div className="flex flex-wrap justify-start gap-2 mt-auto">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-100 text-gray-800 text-[12px] font-semibold px-[13px] py-[7px] rounded-full flex items-center gap-[6px]"
                                    >
                                        {featureIconMap[feature.name] && (
                                            <Image
                                                src={featureIconMap[feature.name]}
                                                alt={feature.name}
                                                width={16}
                                                height={16}
                                                className="object-contain w-[16px] h-[16px]"
                                            />
                                        )}
                                        {feature.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
