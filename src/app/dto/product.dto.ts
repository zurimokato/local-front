import { Status } from "./enum/status.enum";

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    stock: number;
    status: Status; // Puedes definir un enum si lo prefieres
    type: string;

    size?: string;
    color?: string;
    author?: string;
    publisher?: string;
    isbn?: string;
    title?: string;
}