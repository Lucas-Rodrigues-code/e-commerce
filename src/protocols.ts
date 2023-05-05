export type clientAndAdress = {
    name: string;
    birthday: string;
    cpf: string;
    phone: string;
    excluded: boolean;
    street: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
    cep: string;
};

export type ApplicationError = {
    name: string;
    message: string;
};

export type Products = {
    title: string;
    description: string
    photos: string[];
    price: number;
    promotion?: number;
    sku: string;
    category_id: number;
    availability?: boolean;
};

