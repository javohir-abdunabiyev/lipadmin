export default function FeaturesAbout() {
    return (
        <div className="sm:flex justify-between mt-[45px] mb-[100px]">
            <div className="relative flex flex-col gap-[20px] max-w-[657px] mb-[18px] sm:mb-0 rounded-[20px] border-[2px] border-[rgba(0,0,0,0.05)] shadow py-[43px] pl-[35px] pr-[28px]">
                <div className="absolute top-[0px] rounded-b-[4px] left-[35px] bg-[rgba(229,9,9,1)] w-[192px] h-[8px] "></div>
                <p className="font-[600] text-[24px]">Быстрая реакция</p>
                <p className="text-[16px] font-[400]">
                    Отслеживаем ключевые показатели ИТ-систем
                    в режиме 24/7 и оперативно устраняет сбои до того, как они повлияют на бизнес-процессы. Всё работает стабильно и под контролем.
                </p>
            </div>
            <div className="relative flex flex-col gap-[20px] max-w-[657px] rounded-[20px] border-[2px] border-[rgba(0,0,0,0.05)] shadow py-[43px] pl-[35px] pr-[28px]">
                <div className="absolute top-[0px] rounded-b-[4px] left-[35px] bg-[rgba(242,242,242,1)] w-[192px] h-[8px] "></div>
                <p className="font-[600] text-[24px]">Оптимизация процессов</p>
                <p className="text-[16px] font-[400]">
                    Оптимизируем процессы, подбираем только необходимые решения
                    и берём на себя техническое обслуживание, чтобы вы не тратили лишнего
                </p>
            </div>
        </div>
    )
}