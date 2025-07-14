import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function ContactsLipadmin() {
    return (
        <div className="sm:flex grid items-center justify-center gap-[12px]">
            <div className="flex flex-col justify-between bg-white sm:w-[427px] rounded-[12px] w-[288px] h-[180px] pt-[45px] pb-[51px] px-[30px] shadow-sm">
                <p className="font-[400] mb-[20px] text-[22px] text-[rgba(0,0,0,0.8)]">Будем рады поговорить</p>
                <div className="flex gap-[6px] items-center">
                    <img src="/images/phoneIcon.png" alt="Телефон" />
                    <a href="#" className="sm:text-[16px] !text-[20px] text-[rgba(0,0,0,1)] font-[700]">+7 000 000 00 00</a>
                </div>
            </div>
            <div className="flex flex-col justify-between bg-white sm:w-[427px] rounded-[12px] w-[288px] h-[180px] pt-[45px] pb-[51px] px-[30px] shadow-sm">
                <p className="font-[400] mb-[20px] text-[22px] text-[rgba(0,0,0,0.8)]">Напишите нам</p>
                <div className="flex gap-[6px] items-center">
                    <img src="/images/mail2.png" alt="Телефон" className="mt-[7px]" />
                    <a href="#">pochta@pochta.ru</a>
                </div>
            </div>
            <div className="flex flex-col justify-between bg-white sm:w-[427px] rounded-[12px] w-[288px] h-[180px] pt-[45px] pb-[51px] px-[30px] shadow-sm">
                <p className="font-[400] mb-[20px] text-[22px] text-[rgba(0,0,0,0.8)]">Узнайте нас лучше здесь</p>
                <div className="flex gap-[10px]">
                    <Link href={"#"}>
                        <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[9px] p-[6px] bg-[rgba(247,247,247,1)]">
                            <FaTelegramPlane color="red" size={20} className="sm:w-[20px] w-[16px]" />
                        </button>
                    </Link>
                    <Link href={"#"}>
                        <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[10px] p-[6px] bg-[rgba(247,247,247,1)]">
                            <IoLogoWhatsapp color="red" size={20} className="sm:w-[20px] w-[16px]" />
                        </button>
                    </Link>
                    <Link href={"#"}>
                        <button className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full sm:p-[10px] py-[8px] bg-[rgba(247,247,247,1)]">
                            <img src="/images/mail2.png" alt="" className="sm:w-[20px] w-[16px] sm:h-[16px] h-[16px]" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}