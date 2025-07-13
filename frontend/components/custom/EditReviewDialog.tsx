"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Review = {
    id: string;
    name: string;
    position: string;
    text: string;
    createdAt: string;
};

type EditReviewDialogProps = {
    review: Review | null;
    setReview: (review: Review | null) => void;
    refetch: () => void;
};

export default function EditReviewDialog({ review, setReview, refetch }: EditReviewDialogProps) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (review) {
            setName(review.name);
            setPosition(review.position);
            setText(review.text);
        }
    }, [review]);

    const handleUpdate = async () => {
        if (!review || !name.trim() || !position.trim() || !text.trim()) {
            alert("Заполните все поля");
            return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/${review.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, position, text }),
        });

        if (res.ok) {
            setReview(null);
            refetch();
        } else {
            alert("Ошибка при обновлении отзыва");
        }
    };

    return (
        <Dialog open={!!review} onOpenChange={() => setReview(null)}>
            <DialogContent className="max-h-[80vh] overflow-y-auto p-6">
                <DialogHeader>
                    <DialogTitle>Редактировать отзыв</DialogTitle>
                    <DialogDescription>Измените информацию об отзыве.</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Имя"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />

                    <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Должность"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                    />

                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Текст отзыва"
                        className="w-full placeholder:text-white text-white p-2 rounded bg-[#1e263a] border border-[#3b4662]"
                        rows={5}
                    />

                    <Button onClick={handleUpdate} className="w-full bg-blue-600 hover:bg-blue-700">
                        Сохранить изменения
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
