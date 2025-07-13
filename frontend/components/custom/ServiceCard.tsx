import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";
import { Service } from "./types";

const featureIconMap: Record<string, string> = {
    "Проектирование": "/images/proektirov.png",
    "Настройка": "/images/nastroyka.png",
    "Подключение": "/images/podklucenie.png",
    "Поддержка": "/images/support.png",
    "Обслуживание": "/images/wrench.png",
    "Безопасность": "/images/shield.png",
    "Оптимизация": "/images/optimization.png",
    "Обновление": "/images/refresh.png",
    "Стабильная работа": "/images/podklucenie.png",
    "Установка": "/images/install.png",
    "Сопровождение": "/images/following.png",
    "Контроль": "/images/control.png",
    "Внедрение": "/images/tick.png",
    "Круглосуточный контроль": "/images/control.png",
};

export default function ServiceCard({
    service,
    onDelete,
    onEdit,
}: {
    service: Service;
    onDelete: (id: string) => void;
    onEdit: () => void;
}) {
    return (
        <div className="bg-[#2a324c] rounded-2xl border border-[#3c4565] overflow-hidden">
            {service.imageUrl && (
                <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            )}

            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={onEdit}>
                            <Pencil size={16} />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => onDelete(service.id)}>
                            <Trash size={16} />
                        </Button>
                    </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">
                    {service.description || "Описание не указано"}
                </p>

                <div className="text-sm text-gray-200 space-y-1 mb-4">
                    <p>
                        <span className="font-semibold">Цена: от </span> {service.price} ₽
                    </p>
                    <p>
                        <span className="font-semibold">Срок:</span> {service.days} дней
                    </p>
                </div>

                {service.features.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Что входит:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                            {service.features.map((f: any) => (
                                <div key={f.name} className="flex items-center gap-2">
                                    {featureIconMap[f.name] && (
                                        <img
                                            src={featureIconMap[f.name]}
                                            alt={f.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                    )}
                                    <span>{f.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {service.benefits.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Преимущества:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-300">
                            {service.benefits.map((b: any) => (
                                <li key={b.text}>{b.text}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {service.purposes.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Назначение услуги:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-300">
                            {service.purposes.map((p: any) => (
                                <li key={p.id}>
                                    <span className="font-semibold">{p.action}:</span> {p.detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {service.keywords && (
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">SEO ключевые слова:</h4>
                        <p className="text-sm text-yellow-300">{service.keywords}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
