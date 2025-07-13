"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Consul from "./consultation";

export default function CaseCards() {
    return (
        <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] sm:mt-[140px]">
                <div className="relative bg-white rounded-2xl p-[30px] overflow-hidden shadow-lg sm:h-[660px] h-[427px]">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <p className="uppercase sm:text-[13px] text-[16px] text-[#C00000] tracking-widest mb-[6px]">март 2023</p>
                            <h3 className="sm:text-[22px] text-[20px] font-bold leading-[28px] text-black mb-[20px]">
                                Полный IT-аутсорсинг<br />для торговой сети
                            </h3>
                        </div>

                        <div className="sm:flex block gap-[14px] mt-auto">
                            <div className="bg-[#F7F7F7] rounded-xl max-w-[300px] sm:pt-0 pt-[10px] h-[100px] sm:h-[140px] w-full px-[20px] sm:mb-0 mb-[14px]">
                                <p className="sm:text-[60px] text-[30px] font-[500] text-[#C00000]">-90%</p>
                                <p className="text-[18px] text-black mt-1">Сокращение простоев</p>
                            </div>
                            <div className="bg-[#F7F7F7] rounded-xl max-w-[300px] h-[100px] sm:h-[140px] w-full px-[20px] sm:py-0 pt-[10px]">
                                <p className="sm:text-[60px] text-[30px] font-[500] text-[#C00000]">+25%</p>
                                <p className="text-[18px] text-black mt-1">Оптимизация затрат на IT</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[3px] right-[3px] w-[90%] h-[90%] z-0 pointer-events-none">
                        <Image
                            src="/images/autsortingImg.png"
                            alt="Аутсорсинг"
                            fill
                            className="object-bottom-right object-contain"
                        />
                    </div>
                </div>

                <div className="relative bg-white rounded-2xl p-[30px] overflow-hidden shadow-lg sm:h-[660px] h-[427px]">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <p className="uppercase sm:text-[13px] text-[16px] text-[#C00000] tracking-widest mb-[6px]">июль 2023</p>
                            <h3 className="sm:text-[22px] text-[20px] font-bold leading-[28px] text-black mb-[20px]">
                                Поддержка 1С<br />для бухгалтерской фирмы
                            </h3>
                        </div>

                        <div className="bg-[#F7F7F7] rounded-xl px-[22px] sm:py-0 py-[20px] sm:h-[140px] text-left mt-auto">
                            <p className="sm:text-[60px] text-[30px] font-[500] text-[#C00000]">+40%</p>
                            <p className="text-[18px] text-black mt-1">Ускорение работы</p>
                        </div>
                    </div>

                    <div className="absolute top-[3px] right-[3px] w-[90%] h-[90%] z-0 ">
                        <Image
                            src="/images/autsorting2.png"
                            alt="Поддержка"
                            fill
                            className="object-top-right object-contain"
                        />
                    </div>
                </div>


                <div className="relative bg-white rounded-2xl p-[30px] overflow-hidden shadow-lg sm:h-[660px] h-[427px]">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <p className="uppercase sm:text-[13px] text-[16px] text-[#C00000] tracking-widest mb-[6px]">январь 2024</p>
                            <h3 className="sm:text-[22px] text-[20px] font-bold leading-[28px] text-black mb-[20px]">
                                Аутсорсинг системного<br />администратора
                            </h3>
                        </div>

                        <div className="bg-[#F7F7F7] rounded-xl px-[22px] sm:py-0 py-[20px] sm:h-[140px] text-left mt-auto">
                            <p className="sm:text-[60px] text-[30px] font-[500] text-[#C00000]">12 мес</p>
                            <p className="text-[18px] text-black mt-1">Бесперебойной работы</p>
                        </div>
                    </div>

                    <div className="absolute bottom-[3px] left-[3px] w-[100%] h-[100%] z-0 ">
                        <Image
                            src="/images/autsorting3.png"
                            alt="Поддержка"
                            fill
                            className="object-bottom-left object-contain"
                        />
                    </div>
                </div>


                <div className="relative bg-white rounded-2xl p-[30px] overflow-hidden shadow-lg sm:h-[660px] h-[327px]">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <p className="uppercase sm:text-[13px] text-[16px] text-[#C00000] tracking-widest mb-[6px]">май 2025</p>
                            <h3 className="sm:text-[22px] text-[20px] font-bold leading-[28px] text-black mb-[20px]">
                                Сопровождение офисов<br />в разных городах
                            </h3>
                        </div>

                        <div className="bg-[#F7F7F7] rounded-xl px-[22px] sm:py-0 py-[20px] sm:h-[140px] text-left mt-auto">
                            <p className="sm:text-[60px] text-[30px] font-[500] text-[#C00000]">+5 городов</p>
                            <p className="text-[18px] text-black mt-1">Единый стандарт обсуживания для сети</p>
                        </div>
                    </div>

                    <div className="absolute bottom-[3px] right-[3px] w-[90%] h-[90%] z-0 ">
                        <Image
                            src="/images/autsorting4.png"
                            alt="Поддержка"
                            fill
                            className="object-bottom-right object-contain"
                        />
                    </div>
                </div>


            </div>
            <Consul />

        </div>
    );
}
