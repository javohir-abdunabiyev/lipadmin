import CaseCards from "@/components/custom/CaseCards";
import ClientReviews from "@/components/custom/ClientReviews";
import Experiences from "@/components/custom/experiences";
import FeaturesAbout from "@/components/custom/featuresAbout";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
    title: "О нас – IT Специалист",
    description:
        "Надёжный IT-партнёр для вашего бизнеса. Мы обеспечим обслуживание, безопасность, масштабирование и поддержку 24/7. Фокусируйтесь на бизнесе — мы решим остальное.",
    keywords: [
        "IT поддержка",
        "аутсорсинг IT",
        "обслуживание серверов",
        "ИТ компания",
        "поддержка бизнеса",
        "о компании",
        "о нас",
    ],
    openGraph: {
        title: "О нас – IT Специалист",
        description:
            "Надёжный IT-партнёр: обслуживание, безопасность и IT-поддержка для бизнеса. Работаем 24/7 по всей России.",
        url: `${process.env.NEXT_PUBLIC_URL}`, // 🔁 замени на свой настоящий домен
        siteName: "IT Специалист",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_URL}/images/opengraphBG.png`,  // 🔁 замени на свой настоящий домен
                width: 1200,
                height: 630,
                alt: "IT Специалист – О компании",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};


export default function About() {
    return (
        <div className="relative overflow-x-hidden">
            <div className="absolute sm:rotate-40 rotate-200 left-[-20px] sm:right-0 sm:top-0 top-[150px] sm:left-[-430px] w-full sm:h-[900px] h-[600px] bg-[url('/images/mainbg.svg')] bg-no-repeat sm:bg-top bg-top bg-cover z-0 pointer-events-none" />


            <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-[20px] flex-grow">
                <Header />
                <div className="sm:ml-[20px] sm:text-left text-center">
                    <div className="flex sm:justify-start justify-center mb-[46px] items-center gap-[5px] mt-[50px]">
                        <Link href={"/"} className="flex items-center gap-[4px] text-[rgba(80,80,80,1)]">
                            <FaArrowLeft className="text-[rgba(80,80,80,1)] !w-3 !h-3" />
                            Главная
                        </Link>
                        <span className="text-[rgba(80,80,80,1)] font-bold">- О нас</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-end w-full">
                        <span className="text-[50px] sm:text-[100px] mb-[15px] select-none">
                            О НАС
                        </span>

                        <p className="max-w-[590px] sm:font-normal text-[14px] sm:text-[18px] hidden sm:block text-left font-semibold">
                            Станем для вас надёжным ИТ-партнёром, который берёт на себя все задачи: от обслуживания и мониторинга до безопасности
                            и масштабирования. С нами вы экономите ресурсы, избегаете простоев и получаете экспертную поддержку 24/7.
                            <span className="font-bold"> Фокусируйтесь на развитии бизнеса — мы обеспечим его цифровую стабильность.</span>
                        </p>

                        <p className="max-w-[590px] text-[14px] block sm:hidden text-center">
                            Станем для вас надёжным ИТ-партнёром, который берёт на себя все задачи: от обслуживания и мониторинга до безопасности
                        </p>
                    </div>

                </div>


                <div className=" flex flex-col items-center">

                    <div className=" sm:w-fit w-full mt-[100px] p-[40px] backdrop-blur-[50px] rounded-[20px] border border-white shadow-[0px_4px_15px_0px_rgba(184,184,184,0.25)] bg-white/10">

                        <Experiences />
                    </div>
                </div>

                <div className="mt-[120px]">
                    <h2 className="sm:text-[40px] text-[24px] font-semibold sm:font-normal text-left">Наши преимущества</h2>
                    <FeaturesAbout />
                </div>

                <div>
                    <CaseCards />
                </div>

                <div className="mb-[70px]">
                    <h2 className="font-[400] sm:text-[40px] text-[24px] sm:mb-[45px] mb-[30px] sm:mt-[40px] mt-[0px]">Отзывы</h2>
                    <ClientReviews />
                </div>

            </main>

            <Footer />
        </div>
    )
}