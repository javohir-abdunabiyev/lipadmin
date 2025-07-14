"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type Review = {
    id: string;
    name: string;
    position: string;
    text: string;
};

export default function ClientReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review`);
                const data = await res.json();
                if (data.success) {
                    const shuffled: any = shuffleArray(data.reviews);
                    setReviews(shuffled);
                }
            } catch (err) {
                console.error("Ошибка при загрузке отзывов:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    function shuffleArray<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    if (loading) return <p className="text-center text-gray-400">Загрузка отзывов...</p>;

    return (
        <div className="relative">
            {/* Навигация для десктопа */}
            <div className="sm:flex hidden mt-[-90px] justify-end gap-2 mb-6">
                <div className="swiper-button-prev-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronBack size={20} />
                </div>
                <div className="swiper-button-next-custom w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronForward size={20} />
                </div>
            </div>

            {/* Слайдер */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev-reviews",
                    nextEl: ".swiper-button-next-reviews",
                }}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="flex flex-col max-w-[657px] w-full pt-[25px] px-[10px] sm:h-[338px] bg-white border-[2px] border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                            <div className="px-[21px] pb-[20px] flex flex-col h-full">
                                <h3 className="font-[600] sm:text-[26px] text-[20px] text-black mb-[6px]">{review.name}</h3>
                                <div className="flex items-center gap-[6px] pb-[16px] border-b border-[rgba(0,0,0,0.1)]">
                                    <img src="/images/reviewsStar.png" alt="" />
                                    <p className="text-[16px] font-[400] text-[rgba(214,40,40,1)]">{review.position}</p>
                                </div>
                                <p className="text-[16px] text-[rgba(0,0,0,0.8)] font-[400] mt-[16px]">{review.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Навигация для мобилок */}
            <div className="flex sm:hidden justify-center gap-3 mt-4">
                <div className="swiper-button-prev-reviews w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronBack size={20} />
                </div>
                <div className="swiper-button-next-reviews w-[47px] h-[47px] rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition">
                    <IoChevronForward size={20} />
                </div>
            </div>
        </div>
    );
}
