"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type Feature = { name: string };
type Service = {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    features: Feature[];
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

export default function ServicesBlockSlider() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`);
                const data = await res.json();
                if (data.success) setServices(data.services);
            } catch (error) {
                console.error("Ошибка при загрузке услуг:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="relative">
            <div className="sm:flex hidden justify-end gap-2 mb-6">
                <div className="swiper-button-prev-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronBack size={20} />
                </div>
                <div className="swiper-button-next-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronForward size={20} />
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 12 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                }}
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id}>
                        <Link href={`/service/${service.id}`}>
                            <div className="h-full min-h-[540px] flex flex-col bg-white border-[2px] border-gray-200 px-[14px] pt-[14px] rounded-xl shadow-md !text-left hover:shadow-lg transition-shadow">
                                {service.imageUrl ? (
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="object-contain w-full rounded-[14px] mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-[200px] bg-gray-200 rounded-[14px]" />
                                )}

                                <div className="px-[21px] pb-[28px] flex flex-col flex-grow">
                                    <h3 className="font-bold text-[20px] mb-[16px] text-black">{service.title}</h3>
                                    <p className="text-[15px] mb-[16px] text-gray-700">{service.description}</p>

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
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex sm:hidden justify-center gap-3 mt-4">
                <div className="swiper-button-prev-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronBack size={20} />
                </div>
                <div className="swiper-button-next-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronForward size={20} />
                </div>
            </div>
        </div>
    );
}
