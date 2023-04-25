import { clientAndAdress } from "@/protocols";
import { clientsRepository } from "../repositories/clients-repository";

export async function getAllClients() {
    return await clientsRepository.getAllClients();
};

export async function getOrder() {
    return await clientsRepository.getOrder();
};

export async function getClientByName(name: string) {
    const clients = await clientsRepository.getClientByName(name);
    if (!clients) throw new Error("There is no clients with that name!");
    return clients;
};

export async function getClientById(id: number) {
    const client = await clientsRepository.getClientById(id);
    if (!client) throw new Error("There is no clients with that id!");
    return client;
};

export async function orderByIdCLient(id: number, order: string) {
    return await clientsRepository.orderByIdCLient(id, order);
};

export async function putClient(id: number, params: clientAndAdress) {
    const client = await clientsRepository.getClientById(id);
    if (!client) throw new Error("There is no clients with that id!");
    return await clientsRepository.putClient(id, params);
};

export const clientsService = {
    getAllClients,
    getOrder,
    getClientByName,
    getClientById,
    orderByIdCLient,
    putClient
}