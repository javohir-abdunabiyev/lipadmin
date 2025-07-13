export default function Abilities() {
    return (
        <div className="sm:flex grid items-center justify-center gap-[12px] mt-[30px]">
            <div className="flex flex-col justify-between rounded-[12px] w-[320px] h-[180px] py-[32px] px-[30px] shadow-sm">
                <img src="/images/firstopt.png" alt="" className="w-[45px] h-[45px]" />
                <div>
                    <p className="text-[18px] font-semibold">Эффективно выстраиваем</p>
                    <p className="text-[18px]">ИТ-инфраструктуру</p>
                </div>
            </div>
            <div className="flex flex-col justify-between rounded-[12px] w-[320px] h-[180px] py-[32px] px-[30px] shadow-sm">
                <img src="/images/secondopt.png" alt="" className="w-[45px] h-[45px]" />
                <div>
                    <p className="text-[18px] font-semibold">Решаем разовые задачи</p>
                    <p className="text-[18px]">и комплексные проекты</p>
                </div>
            </div>
            <div className="flex flex-col justify-between rounded-[12px] w-[320px] h-[180px] py-[32px] px-[30px] shadow-sm">
                <img src="/images/thirdopt.png" alt="" className="w-[45px] h-[45px]" />
                <div>
                    <p className="text-[18px] font-semibold">Расширяем возможности</p>
                    <p className="text-[18px]">без найма специалистов</p>
                </div>
            </div>
            <div className="flex flex-col justify-between rounded-[12px] w-[320px] h-[180px] py-[32px] px-[30px] shadow-sm">
                <img src="/images/fourthopt.png" alt="" className="w-[45px] h-[45px]" />
                <div>
                    <p className="text-[18px] font-semibold">Работаем 24/7 и гарантируем</p>
                    <p className="text-[18px]">бесперебойную работу</p>
                </div>
            </div>
        </div>
    )
}