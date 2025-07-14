import ContactsLipadmin from "@/components/custom/ContactsLipadmin";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export const metadata = {
    title: "Контакты – IT Специалист",
    description: "Свяжитесь с нами: консультации, техподдержка, сотрудничество. Надёжная IT-команда всегда на связи.",
    keywords: [
        "Контакты IT компании",
        "связаться с IT специалистом",
        "обратная связь",
        "IT поддержка",
        "консультация IT",
    ],
    openGraph: {
        title: "Контакты – IT Специалист",
        description: "Свяжитесь с нашей командой для консультации и сотрудничества. Надёжный IT-партнёр рядом.",
        url: `${process.env.NEXT_PUBLIC_URL}`, // замени на твой реальный домен
        siteName: "IT Специалист",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_URL}/images/opengraphBG.png`, // замени на твой реальный домен
                width: 1200,
                height: 630,
                alt: "Контакты IT Специалиста",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};

export default function Contacts() {
    return (
        <div className="overflow-x-hidden overflow-y-hidden relative">
            <div className="absolute sm:top-[90px] top-[80px]  inset-x-0 mx-auto w-[1600px] max-w-none sm:h-[900px] h-[600px] bg-[url('/images/mainbg.svg')] bg-no-repeat bg-cover sm:bg-top bg-bottom z-0 pointer-events-none sm:rotate-[22deg] rotate-[200deg]" />

            <main className="relative z-10 w-full pb-[30px] sm:pb-[210px] h-full max-w-[1400px] mx-auto px-6 pt-[100px] flex-grow">
                <Header />
                <div className="sm:ml-[20px] sm:text-left text-center">
                    <div className="flex sm:justify-start justify-center mb-[46px] items-center gap-[5px] mt-[50px]">
                        <Link href={"/"} className="flex items-center gap-[4px] text-[rgba(80,80,80,1)]">
                            <FaArrowLeft className="text-[rgba(80,80,80,1)] !w-3 !h-3" />
                            Главная
                        </Link>
                        <span className="text-[rgba(80,80,80,1)] font-bold">- Контакты</span>
                    </div>

                    <div className="sm:flex block items-center justify-between">
                        <h3 className="text-[40px] sm:text-[80px]">Контакты</h3>
                        <p className="text-[18px]">Свяжитесь с нами и мы все подробно расскажем</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="sm:w-fit w-full mt-[100px] p-[40px] backdrop-blur-[50px] rounded-[20px] border border-white shadow-[0px_4px_15px_0px_rgba(184,184,184,0.25)] bg-white/10">
                        <ContactsLipadmin />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
