// frontend/app/service/[id]/page.tsx

import { notFound } from "next/navigation";
import Header from "@/components/custom/Header";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "@/components/custom/footer";
import ServicesBlockSlider from "@/components/custom/ClientServicesWithSlider";
import ClientReviews from "@/components/custom/ClientReviews";

type Feature = { name: string };
type Benefit = { text: string };
type Purpose = { action: string; detail: string };

type Service = {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    keywords: string,
    price: number;
    days: number;
    features: Feature[];
    benefits: Benefit[];
    purposes: Purpose[];
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

export async function generateMetadata({ params }: { params: any }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${params.id}`, {
        cache: "no-store",
    });

    const data = await res.json();

    if (!data.success) return {};

    const service: Service = data.service;

    return {
        title: `${service.title}`,
        description: service.description,
        keywords: service.keywords,
        openGraph: {
            title: `${service.title} – IT Специалист`,
            description: service.description,
            url: `${process.env.NEXT_PUBLIC_URL}/service/${params.id}`, // ← замените на реальный домен
            siteName: "IT Специалист",
            type: "article",
            locale: "ru_RU",
        },
    };
}


async function getService(id: string): Promise<Service | null> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${id}`, {
            next: { revalidate: 60 },
        });
        const data = await res.json();
        return data.success ? data.service : null;
    } catch (e) {
        console.error(e);
        return null;
    }
}


export default async function ServicePage({ params }: { params: any }) {
    const service = await getService(params.id);
    if (!service) return notFound();

    return (
        <div className="overflow-x-hidden relative">
            <div className="absolute sm:top-[30px] top-[70px] left-[-325px] sm:left-[-90px] w-[1000px] sm:h-[900px] h-[600px] overflow-hidden bg-[url('/images/mainbg.png')] bg-no-repeat sm:bg-top bg-bottom bg-cover z-0 pointer-events-none rotate-[200deg] sm:rotate-35" />

            <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-[20px] flex-grow">
                <Header />

                <div className="sm:flex items-center justify-between text-center sm:text-left">
                    <div className="flex flex-col text-center sm:text-left sm:mb-[100px] mb-[16px]">
                        <div className="flex sm:justify-start justify-center sm:mb-[46px] mb-[10px] items-center gap-[5px] mt-[50px] text-[14px] sm:text-[16px]">
                            <Link href="/" className="flex items-center gap-[4px] text-[rgba(80,80,80,1)]">
                                <FaArrowLeft className="text-[rgba(80,80,80,1)] !w-3 !h-3" />
                                Главная
                            </Link>
                            <Link href="/services" className="text-[rgba(80,80,80,1)]">
                                - Услуги
                            </Link>
                            <span
                                className="text-[rgba(80,80,80,1)] font-semibold max-w-[150px] sm:max-w-none truncate overflow-hidden text-ellipsis whitespace-nowrap block"
                                title={service.title}
                            >
                                - {service.title}
                            </span>
                        </div>

                        <h1 className="text-[30px] sm:text-[60px] max-w-[900px] leading-[100%] tracking-[0px] uppercase font-normal">
                            {service.title.toUpperCase()}
                        </h1>
                    </div>
                    <p className="text-[14px] sm:text-[18px] mb-[46px]">
                        Полный контроль без лишних затрат
                    </p>
                </div>

                {service.purposes.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-[30px] sm:mb-[120px]">
                        {service.purposes.map((p, i) => (
                            <div
                                key={i}
                                className="relative max-w-[657px] bg-white px-[35px] py-[33px] border-[2px] border-[rgba(0,0,0,0.05)] rounded-[20px] shadow"
                            >
                                <div
                                    className={`absolute top-0 left-[35px] w-[192px] h-[8px] rounded-b-[4px] ${i === 0 ? "bg-[rgba(229,9,9,1)]" : "bg-[rgba(242,242,242,1)]"
                                        }`}
                                />
                                <h3 className="font-semibold sm:text-[24px] text-[20px] mb-[20px]">{p.action}</h3>
                                <p className="text-[16px] text-[rgba(0,0,0,0.8)]">{p.detail}</p>
                            </div>
                        ))}
                    </div>
                )}

                <section className="mb-[53px]">
                    <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-between items-center sm:items-start gap-4 mb-5">
                        <h2 className="text-[24px] sm:text-[36px] font-semibold">{service.title}</h2>

                        <div className="relative flex items-center gap-[12px] mt-[10px] sm:mt-0 text-white bg-[rgba(229,9,9,1)] p-[24px] rounded-[20px]">
                            <div className="absolute flex items-center top-[-15px] right-0 py-[6px] px-[12px] rounded-[20px] gap-[6px] bg-black">
                                <img src="/images/serviceIdeal.png" alt="" className="w-[11px] h-[11px]" />
                                <span>Идеально для старта</span>
                            </div>
                            <div className="text-[24px] py-[6px] px-[18px] bg-[rgba(199,24,24,1)] rounded-[50px]">
                                от {service.price} ₽
                            </div>
                            <div className="flex items-center gap-[7px] text-[24px] py-[6px] px-[18px] bg-[rgba(199,24,24,1)] rounded-[50px]">
                                <FaClock size={13} />
                                {service.days} дней
                            </div>
                        </div>
                    </div>

                    <p className="max-w-[800px] text-[rgba(0,0,0,0.8)] leading-relaxed text-[16px]">
                        {service.description}
                    </p>
                </section>


                {service.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-[11px] mb-[150px]">
                        {service.benefits.map((b, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-[3px] py-[8px] sm:py-[20px] px-[12px] sm:px-[26px] rounded-[50px] text-[12px] font-semibold sm:text-[16px] text-[rgba(229,9,9,1)] bg-[rgba(246,246,246,1)]"
                            >
                                <IoMdCheckmark size={16} /> {b.text}
                            </div>
                        ))}
                    </div>
                )}

                <div className="mb-[130px]">
                    <h2 className="sm:font-[400] font-semibold sm:text-[40px] text-[24px] sm:mb-[45px] mb-[30px] sm:mt-[40px] mt-[0px]">Отзывы</h2>
                    <ClientReviews />
                </div>

                <div className="mb-[70px]">
                    <h2 className="sm:font-[400] font-semibold sm:text-[40px] text-[24px] sm:mb-[45px] mb-[30px] sm:mt-[40px] mt-[0px]">Похожее</h2>
                    <ServicesBlockSlider />
                </div>
            </main>

            <Footer />
        </div>
    );
}
