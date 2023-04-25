import { clientAndAdress } from "@/protocols";
import prisma from "../database/database";

export async function getAllClients() {
    return await prisma.clients.findMany({ include: { address_clients_addressToaddress: true } });
};

export async function getOrder() {
    return { error: "Em desenvolvimento" };
};

export async function getClientByName(name: string) {
    return await prisma.clients.findMany({
        where: { name: { contains: name } }
    });
};

export async function getClientById(id: number) {
    return await prisma.clients.findUnique({
        where: { id },
        include: { address_clients_addressToaddress: true }
    });
};

export async function orderByIdCLient(id: number, order: string) {
    return { error: "Em desenvolvimento!" }
};

export async function putClient(id: number, params: clientAndAdress) {
    const adressId = await prisma.clients.findUnique({
        where: { id },
    });
    return await prisma.$transaction([
        prisma.clients.update({
            where: { id },
            data: {
                name: params.name,
                birthday: params.birthday,
                cpf: params.cpf,
                phone: params.phone
            }
        }),
        prisma.address.update({
            where: { id: adressId.address },
            data: {
                street: params.street,
                number: params.number,
                complement: params.complement,
                city: params.city,
                state: params.state,
                cep: params.cep
            }

        })
    ])
};

export const clientsRepository = {
    getAllClients,
    getOrder,
    getClientByName,
    getClientById,
    orderByIdCLient,
    putClient
};