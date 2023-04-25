import prisma from "../database/database";

export async function getAllClients() {
    return await prisma.clients.findMany({});
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
        include: { users: true }
    });
};

export async function orderByIdCLient(id: number, order: string) {
    return { error: "Em desenvolvimento!" }
};

export async function putClient(id: number) {
    return { error: "Em desenvolvimento " }

};

export const clientsRepository = {
    getAllClients,
    getOrder,
    getClientByName,
    getClientById,
    orderByIdCLient,
    putClient
};