"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import EditReviewDialog from "@/components/custom/EditReviewDialog";

type Review = {
    id: string;
    name: string;
    position: string;
    text: string;
    createdAt: string;
};


export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const fetchReviews = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review`);
            const data = await res.json();
            if (data.success) setReviews(data.reviews);
            else setError("Не удалось загрузить отзывы");
        } catch (err) {
            console.error(err);
            setError("Произошла ошибка при загрузке отзывов");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Удалить этот отзыв?")) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                setReviews(reviews.filter((r) => r.id !== id));
            } else {
                alert(data.message || "Ошибка при удалении");
            }
        } catch (err) {
            console.error(err);
            alert("Произошла ошибка при удалении");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#2a324c] text-white rounded-xl">
            <h1 className="text-2xl font-bold mb-6">Отзывы</h1>

            {loading && <p className="text-gray-400">Загрузка...</p>}
            {error && <p className="text-red-400">{error}</p>}

            <div className="space-y-4">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-[#1e263a] p-4 rounded-xl border border-[#3a455f] shadow"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <div>
                                <h3 className="text-lg font-semibold">{review.name}</h3>
                                <p className="text-sm text-gray-400 italic">{review.position}</p>
                            </div>
                            <span className="text-sm text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-white mb-3">{review.text}</p>

                        <div className="flex gap-2">
                            <Button
                                onClick={() => setSelectedReview(review)}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Редактировать
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => handleDelete(review.id)}
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                ))}
                {!loading && reviews.length === 0 && (
                    <p className="text-gray-400">Отзывов пока нет.</p>
                )}
            </div>

            {selectedReview && (
                <EditReviewDialog
                    review={selectedReview}
                    setReview={setSelectedReview}
                    refetch={fetchReviews}
                />
            )}
        </div>
    );
}
