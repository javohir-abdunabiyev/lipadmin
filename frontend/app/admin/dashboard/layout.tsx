'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState<string | null>(null)

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/me`, {
                    credentials: 'include',
                })
                if (res.ok) {
                    const data = await res.json()
                    setName(data.name)
                }
            } catch (err) {
                console.error('Ошибка при получении админа', err)
            }
        }

        fetchAdmin()
    }, [])

    return (
        <div className="flex min-h-screen bg-[#1e263a] text-white">
            <aside className="w-64 bg-[#242c42] px-2 py-6 flex flex-col">
                <div className='border-r-[1px] border-[#2d3653] w-full h-full px-4'>
                    <img src="/images/logo.png" alt="Logo" className="h-10 mb-6" />
                    <div className="mb-8">
                        <p className="text-white text-xl font-semibold">{name || 'Загрузка...'}</p>
                        <p className="text-gray-400">Статус: Админ</p>
                    </div>

                    <p className="text-gray-400 text-sm border-b border-gray-600 pb-2 mb-4 font-semibold">Меню</p>

                    <div className="space-y-2">
                        <Link href={"/admin/dashboard/services"}>
                            <Button className="w-full justify-between flex items-center gap-2 bg-[] hover:bg-[#21283c] cursor-pointer">
                                <div className='flex items-center gap-[20px]'>
                                    <div className="w-[10px] h-[10px] rounded-full border-3 bg-transparent"></div>
                                    Услуги
                                </div>
                                <FaArrowRight className="text-gray-400 !w-3 !h-3" />
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/reviews"}>
                            <Button className="w-full justify-between flex items-center gap-2 bg-[] hover:bg-[#21283c] cursor-pointer">
                                <div className='flex items-center gap-[20px]'>
                                    <div className="w-[10px] h-[10px] rounded-full border-3 bg-transparent"></div>
                                    Отзывы
                                </div>
                                <FaArrowRight className="text-gray-400 !w-3 !h-3" />
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/addService"}>
                            <Button className="w-full justify-between flex items-center gap-2 bg-[] hover:bg-[#21283c] cursor-pointer">
                                <div className='flex items-center gap-[20px]'>
                                    <div className="w-[10px] h-[10px] rounded-full border-3 bg-transparent"></div>
                                    Добавить услугу
                                </div>
                                <FaArrowRight className="text-gray-400 !w-3 !h-3" />
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/addReview"}>
                            <Button className="w-full justify-between flex items-center gap-2 bg-[] hover:bg-[#21283c] cursor-pointer">
                                <div className='flex items-center gap-[20px]'>
                                    <div className="w-[10px] h-[10px] rounded-full border-3 bg-transparent"></div>
                                    Добавить отзыв
                                </div>
                                <FaArrowRight className="text-gray-400 !w-3 !h-3" />
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/Consultations"}>
                            <Button className="w-full justify-between flex items-center gap-2 bg-[] hover:bg-[#21283c] cursor-pointer">
                                <div className='flex items-center gap-[20px]'>
                                    <div className="w-[10px] h-[10px] rounded-full border-3 bg-transparent"></div>
                                    Консультации
                                </div>
                                <FaArrowRight className="text-gray-400 !w-3 !h-3" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </aside>

            <main className="flex-1 p-8 h-screen overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
