import ServicesBlock from "@/components/custom/ClientServicesBlock";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export const metadata = {
    title: "Услуги – IT Специалист",
    description:
        "IT-услуги для бизнеса: обслуживание серверов, настройка инфраструктуры, поддержка пользователей. Эффективные решения под ключ.",
    keywords: [
        "ИТ услуги",
        "IT поддержка",
        "аутсорсинг IT",
        "обслуживание компьютеров",
        "услуги IT компании",
        "обслуживание серверов",
        "настройка сети",
        "цифровая безопасность",
    ],
    openGraph: {
        title: "Услуги – IT Специалист",
        description:
            "Профессиональные IT-услуги: настройка, обслуживание, поддержка. Работаем с бизнесами любого масштаба по всей России.",
        url: `${process.env.NEXT_PUBLIC_URL}`, // замени на реальный домен
        siteName: "IT Специалист",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_URL}/images/opengraphBG.png`, // 🔁 обложка сайта
                width: 1200,
                height: 630,
                alt: "IT услуги для бизнеса",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};

export default function AllServices() {
    return (
        <div className="overflow-x-hidden relative">
            <div className="sm:hidden absolute top-[130px] left-[-300px] w-[1000px] h-[600px] rotate-[200deg] bg-[url('/images/mainbg.png')] bg-no-repeat bg-bottom bg-cover z-0 pointer-events-none" />

            <main className="relative mb-[70px] z-10 w-full max-w-[1400px] mx-auto px-6 pt-[20px] flex-grow">
                <Header />
                <div className="sm:ml-[20px] mb-[60px] sm:text-left text-center">
                    <div className="flex sm:justify-start justify-center sm:mb-[46px] items-center gap-[5px] mt-[50px]">
                        <Link href={"/"} className="flex items-center gap-[4px] text-[rgba(80,80,80,1)]">
                            <FaArrowLeft className="text-[rgba(80,80,80,1)] !w-3 !h-3" />
                            Главная
                        </Link>
                        <span className="text-[rgba(80,80,80,1)] font-bold">- Услуги</span>
                    </div>

                    <div className="sm:flex block items-center justify-between">
                        <h3 className="text-[40px] sm:text-[80px]">Услуги</h3>
                        <p className="text-[18px]">Подберем лучшее эффективное решение для вашей компании</p>
                    </div>
                </div>

                <ServicesBlock />
            </main>
            <Footer />
        </div>
    );
}
