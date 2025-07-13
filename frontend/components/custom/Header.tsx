"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[rgba(255,255,255,0.83)] rounded-[50px] py-[15px] shadow w-full z-50 relative">
            <div className="max-w-[1300px] w-full mx-auto px-6 flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo.png" alt="Логотип" className="w-[155px]" />
                </Link>

                <nav className="hidden md:flex items-center gap-[60px]">
                    <Link href="/" className="font-[400] text-[16px]">Главная</Link>
                    <Link href="/about">О нас</Link>
                    <Link href="/services">Услуги</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>

                <div className="hidden md:flex items-center gap-[6px]">
                    <img src="/images/phoneIcon.png" alt="Телефон" />
                    <p className="font-[700] text-[20px] text-[rgba(214,40,40,1)]">+7 000 000 00 00</p>
                </div>

                <button
                    className="md:hidden text-[28px] text-black"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <FiMenu />
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[400px] bg-white rounded-[24px] shadow-xl py-8 px-6 z-[999] md:hidden">
                    <div className="flex justify-between mb-[24px] !items-center">
                        <img src="/images/logo.png" alt="Логотип" className="w-[155px]" />
                        <button
                            className="text-[28px] text-gray-500"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <FiX />
                        </button>
                    </div>

                    <nav className="flex flex-col items-center gap-6 mt-4 text-[22px] font-[400]">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
                        <Link href="/services" onClick={() => setMenuOpen(false)}>Услуги</Link>
                        <Link href="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
