import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FeatureCheckboxes from "./FeatureCheckboxes";
import BenefitsInput from "./BenefitsInput";
import { Feature, Service } from "./types";

type EditServiceDialogProps = {
    service: Service | null;
    setService: (s: Service | null) => void;
    refetch: () => void;
    fixedOptions: Feature[];
};

export default function EditServiceDialog({
    service,
    setService,
    refetch,
    fixedOptions,
}: EditServiceDialogProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [keywords, setKeywords] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [benefits, setBenefits] = useState<string[]>([]);
    const [newBenefit, setNewBenefit] = useState("");
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [purposes, setPurposes] = useState<{ action: string; detail: string }[]>([]);
    const [newPurpose, setNewPurpose] = useState<{ action: string; detail: string }>({ action: "", detail: "" });

    useEffect(() => {
        if (service) {
            setTitle(service.title);
            setDescription(service.description || "");
            setPrice(service.price.toString());
            setDays(service.days.toString());
            setKeywords(service.keywords || "");
            setImage(null);
            setBenefits(service.benefits.map((b) => b.text));
            setSelectedOptions(service.features.map((f) => f.name));
            setPurposes(service.purposes.map((p: any) => ({ action: p.action, detail: p.detail })));
        }
    }, [service]);

    const toggleOption = (name: string) => {
        setSelectedOptions((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
        );
    };

    const handleEdit = async () => {
        if (!service || !title.trim() || !price.trim() || !days.trim()) {
            alert("Пожалуйста, заполните обязательные поля.");
            return;
        }

        if (benefits.some((b) => !b.trim())) {
            alert("Пожалуйста, удалите пустые преимущества.");
            return;
        }

        const featuresToSend = selectedOptions.map((name) => ({ name }));

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("days", days);
        formData.append("keywords", keywords);
        formData.append("features", JSON.stringify(featuresToSend));
        formData.append("benefits", JSON.stringify(benefits));
        formData.append("purposes", JSON.stringify(purposes));
        if (image) formData.append("image", image);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/service/edit/${service.id}`,
            {
                method: "PUT",
                body: formData,
            }
        );

        if (res.ok) {
            setService(null);
            refetch();
        } else {
            alert("Ошибка при обновлении услуги");
        }
    };

    return (
        <Dialog open={!!service} onOpenChange={() => setService(null)}>
            <DialogContent className="max-h-[80vh] overflow-y-auto p-6">
                <DialogHeader>
                    <DialogTitle>Редактировать услугу</DialogTitle>
                    <DialogDescription>Обновите данные услуги.</DialogDescription>
                </DialogHeader>

                <div className="space-y-3">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />

                    <input
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Ключевые слова (через запятую)"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />

                    <div className="flex gap-2">
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Цена"
                            className="flex-1 placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                        />
                        <input
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="Срок"
                            className="flex-1 placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                        />
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        className="w-full placeholder:text-black text-black"
                    />

                    <FeatureCheckboxes
                        options={fixedOptions}
                        selected={selectedOptions}
                        toggle={toggleOption}
                    />

                    <BenefitsInput
                        benefits={benefits}
                        setBenefits={setBenefits}
                        newBenefit={newBenefit}
                        setNewBenefit={setNewBenefit}
                    />

                    {/* Purposes block */}
                    <div>
                        <label className="block text-sm mb-1 font-medium">Цели услуги</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                placeholder="Действие"
                                value={newPurpose.action}
                                onChange={(e) => setNewPurpose({ ...newPurpose, action: e.target.value })}
                                className="flex-1 p-2 rounded bg-[#1e263a] border border-[#3b4662] text-white placeholder:text-white"
                            />
                            <input
                                type="text"
                                placeholder="Описание"
                                value={newPurpose.detail}
                                onChange={(e) => setNewPurpose({ ...newPurpose, detail: e.target.value })}
                                className="flex-1 p-2 rounded bg-[#1e263a] border border-[#3b4662] text-white placeholder:text-white"
                            />
                            <Button
                                type="button"
                                onClick={() => {
                                    if (newPurpose.action.trim() && newPurpose.detail.trim()) {
                                        setPurposes([...purposes, newPurpose]);
                                        setNewPurpose({ action: "", detail: "" });
                                    }
                                }}
                            >
                                +
                            </Button>
                        </div>
                        <ul className="text-sm text-white space-y-1">
                            {purposes.map((p, idx) => (
                                <li key={idx} className="flex justify-between bg-[#323c58] p-2 rounded">
                                    <div>
                                        <strong>{p.action}</strong>: {p.detail}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setPurposes(purposes.filter((_, i) => i !== idx))}
                                        className="text-red-400 hover:text-red-600"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button onClick={handleEdit} className="w-full bg-blue-600 hover:bg-blue-700">
                        Сохранить изменения
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}