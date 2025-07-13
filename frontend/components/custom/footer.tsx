import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="sm:bg-[rgba(246,246,246,1)] py-[50px] sm:px-[88px] px-[44px]">
                <div className="sm:flex block justify-between">
                    <div className="sm:flex-col sm:gap-0 sm:justify-start justify-between flex sm:items-start sm:mb-0 mb-[35px] items-center">
                        <img src="/images/logo.png" alt="Логотип" draggable="false" className="w-[155px] h-[29px]" />
                        <div className="flex gap-[10px] sm:mt-[31px]">
                            <Link href={""}>
                                <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[9px] p-[6px] bg-white">
                                    <FaTelegramPlane color="black" size={20} className="sm:w-[20px] w-[16px]" />
                                </button>
                            </Link>
                            <Link href={""}>
                                <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[10px] p-[6px] bg-white">
                                    <IoLogoWhatsapp color="black" size={20} className="sm:w-[20px] w-[16px]" />
                                </button>
                            </Link>
                            <Link href={""}>
                                <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[10px] py-[8px] bg-white">
                                    <img src="/images/mail.png" alt="" className="sm:w-[20px] w-[16px] sm:h-[20px] h-[16px]" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 grid grid-cols-2 sm:gap-[110px]">
                        <div className="flex flex-col gap-[20px] sm:text-[16px] text-[15px]">
                            <Link href={"/"}>
                                Главная
                            </Link>
                            <Link href={"/about"}>
                                О нас
                            </Link>
                            <Link href={"/"}>
                                Услуги
                            </Link>
                            <Link href={"/contacts"}>
                                Контакты
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h4 className="font-bold sm:text-[16px] text-[12px]">Будем рады поговорить</h4>
                            <div className="flex gap-[6px] items-center">
                                <img src="/images/phoneIcon2.png" alt="Телефон" />
                                <p className="sm:text-[16px] text-[14px]">+7 000 000 00 00</p>
                            </div>
                            <h4 className="font-bold text-[16px]">Почта</h4>
                            <div className="flex gap-[6px] items-center">
                                <img src="/images/mail.png" alt="Телефон" />
                                <p>pochta@pochta.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[48px] sm:mt-0 mt-[50px]">
                        <div className="flex flex-col gap-[18px]">
                            <h4 className="font-bold text-[16px]">Готовы к росту без лишних затрат?</h4>
                            <p className="text-[14px] sm:text-[16px]">Cвяжитесь с нами — обсудим вашу задачу</p>
                        </div>
                        <button className="w-[220px] sm:w-[190px] h-[35px] rounded-[50px] border-[2px] border-[rgba(229,9,9,1)] text-[18px] font-[600] text-[rgba(229,9,9,1)] cursor-pointer">
                            Связаться с нами
                        </button>

                    </div>
                </div>
            </div>
            <div className="sm:flex block text-center sm:gap-[440px] bg-black font-[300] text-[rgba(255,255,255,0.6)] w-full py-[15px] px-[48px] flex-shrink-0">
                <p className="text-[13px] sm:text-[15px]">2026 Lipadmin Все права защищены ©</p>
                <p className="text-[13px] sm:text-[15px]">Политика обработки персональных данных</p>
            </div>
        </div>
    )
}