'use client';

import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            {/* Фон перевёрнут ВНИЗУ на мобилке, нормальный на sm+ */}
            <div className="absolute sm:top-0 top-[-60px] left-[-60px] sm:left-0 right-0 h-[380px] sm:h-full bg-[url('/images/404bg.png')] bg-no-repeat bg-bottom sm:bg-top bg-cover -z-10 rotate-160 sm:rotate-0" />

            <main className="relative z-10 w-full max-w-[1400px] sm:mb-[200px] mx-auto px-6 pt-[20px] flex-grow">
                <Header />

                {/* ВЫРАВНИВАНИЕ по центру экрана */}
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="flex flex-col sm:mt-[65px] mt-[0px] items-center justify-center text-center gap-4 max-w-xl">
                        <img src="/images/404emodzi.png" alt="" className="w-[64px] h-[64px]" />
                        <h1 className="sm:text-[60px] text-[36px] font-[400] uppercase text-black">Ошибка 404</h1>
                        <p className="text-[rgba(80,80,80,1)] mb-[45px] sm:text-[16px]">
                            Попробуйте перезагрузить или перейдите на главную
                        </p>
                        <Button
                            onClick={() => window.location.reload()}
                            className="w-[210px] h-[66px] rounded-[50px] mb-[10px] text-white border-[3px] shadow-lg border-[rgba(255,255,255,0.2)] font-[700] text-[20px] bg-[rgba(231,25,25,1)]"
                        >
                            Перезагрузить
                        </Button>
                        <a href="/" className="text-black font-[600] text-[18px] underline">
                            На главную
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
