import Abilities from "@/components/custom/abilities";
import CaseCards from "@/components/custom/CaseCards";
import ServicesBlock from "@/components/custom/ClientServicesBlock";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import Link from "next/link";

export const metadata = {
  title: "IT Специалист – Поддержка и обслуживание для бизнеса",
  description: "Мы создаём и поддерживаем IT-инфраструктуру любой сложности. Надёжные услуги для бизнеса от опытных специалистов.",
  keywords: [
    "IT услуги",
    "Поддержка бизнеса",
    "Обслуживание компьютеров",
    "Аутсорсинг IT",
    "ИТ компания",
    "Обслуживание серверов",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "IT Специалист – Поддержка и обслуживание для бизнеса",
    description: "Мы создаём и поддерживаем IT-инфраструктуру любой сложности. Надёжные услуги для бизнеса от опытных специалистов.",
    url: `${process.env.NEXT_PUBLIC_URL}`, // 🔁 укажи здесь свой домен
    siteName: "IT Специалист",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/opengraphBG.png`, // 🔁 обложка сайта
        width: 1200,
        height: 630,
        alt: "Главная страница IT Специалиста",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};



export default function Home() {
  return (
    <div className="">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] sm:h-[900px] h-[600px] bg-[url('/images/mainbg.svg')] bg-no-repeat sm:bg-top bg-bottom bg-cover z-0 pointer-events-none" />

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-[100px] flex-grow">
        <Header />

        <div className="flex flex-col items-center justify-center mt-[30px]">
          <div className="flex flex-col sm:flex-row items-center justify-center font-[400] sm:gap-[16px] gap-[0px] mb-[-20px] text-center">
            <img
              src="/images/mainpageh1.png"
              alt=""
              draggable="false"
              className="sm:w-[310px] w-[190px]"
            />
            <span className="text-[50px] sm:text-[100px] mb-[15px] select-none">
              СПЕЦИАЛИСТ
            </span>
          </div>

          <p className="max-w-[700px] w-full text-center font-[400] sm:text-[20px] text-[15px] mb-[30px] sm:mt-0 mt-[10px]">
            Мы не просто занимаемся обслуживанием IT инфраструктуры, мы создаём эффективные инструменты для вашего бизнеса
          </p>

          <Link href={"/services"}>
            <button className="px-[36px] py-[20px] text-[20px] text-white rounded-[50px] font-semibold cursor-pointer shadow-xl mb-[80px] bg-[rgba(231,25,25,1)] border-[3px] border-red-400">
              Смотреть услуги
            </button>
          </Link>

          <div className="sm:w-fit w-full p-[40px] backdrop-blur-[50px] rounded-[20px] border border-white shadow-[0px_4px_15px_0px_rgba(184,184,184,0.25)] bg-white/10">
            <h2 className="sm:text-[40px] text-[21px] font-semibold sm:font-normal text-left">Мы помогаем компаниям любого масштаба</h2>
            <Abilities />
          </div>
        </div>

        <div className="mt-[100px] mb-[45px]">
          <h2 className="text-[40px] text-left">Услуги</h2>
        </div>

        <div className="mb-[40px]">
          <ServicesBlock />
        </div>

        <CaseCards />
      </main>

      <Footer />
    </div>
  );
}