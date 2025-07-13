import { Checkbox } from "@/components/ui/checkbox";
import { Feature } from "./types";

export default function FeatureCheckboxes({
    options,
    selected,
    toggle,
}: {
    options: Feature[];
    selected: string[];
    toggle: (name: string) => void;
}) {
    return (
        <div>
            <h4 className="font-semibold mt-4 mb-2">Что входит:</h4>
            <div className="grid grid-cols-2 gap-2">
                {options.map((opt) => (
                    <label key={opt.name} className="flex items-center gap-2">
                        <Checkbox
                            checked={selected.includes(opt.name)}
                            onCheckedChange={() => toggle(opt.name)}
                        />
                        <span className="text-sm">{opt.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
