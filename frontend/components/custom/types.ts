export interface Feature {
    id?: string;
    name: string;
    icon: string;
}

export interface Benefit {
    id?: string;
    text: string;
}

export type Service = {
    id: string;
    title: string;
    description?: string;
    price: number;
    days: number;
    purposes: any,
    imageUrl?: string;
    keywords?: string;
    features: { name: string }[];
    benefits: { text: string }[];
};
