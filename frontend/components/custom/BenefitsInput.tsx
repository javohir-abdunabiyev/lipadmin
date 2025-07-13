import { Button } from "@/components/ui/button";

export default function BenefitsInput({
    benefits,
    setBenefits,
    newBenefit,
    setNewBenefit,
}: {
    benefits: string[];
    setBenefits: (b: string[]) => void;
    newBenefit: string;
    setNewBenefit: (s: string) => void;
}) {
    return (
        <div>
            <h4 className="font-semibold mt-4 mb-2">Преимущества</h4>
            {benefits.map((b, i) => (
                <div key={i} className="flex gap-2 mb-1">
                    <input
                        value={b}
                        onChange={(e) => {
                            const copy = [...benefits];
                            copy[i] = e.target.value;
                            setBenefits(copy);
                        }}
                        className="flex-1 placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setBenefits(benefits.filter((_, idx) => idx !== i))}
                    >
                        ×
                    </Button>
                </div>
            ))}
            <div className="flex gap-2 mt-2">
                <input
                    value={newBenefit}
                    onChange={(e) => setNewBenefit(e.target.value)}
                    placeholder="Новое преимущество"
                    className="flex-1 p-2 placeholder:text-gray-500 rounded bg-[#1e263a] border border-[#3b4662]"
                />
                <Button
                    onClick={() => {
                        if (newBenefit.trim()) {
                            setBenefits([...benefits, newBenefit.trim()]);
                            setNewBenefit("");
                        }
                    }}
                >
                    +
                </Button>
            </div>
        </div>
    );
}
