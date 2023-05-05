import { clientAndAdress } from "@/protocols";
import { clientsRepository } from "../repositories/clients-repository";
import { userRepository } from "../repositories/user-repository";
import { notFoundError } from "../errors/not-found-error";

export async function getAllClients() {
    return await clientsRepository.getAllClients();
};

export async function getOrder() {
    return await clientsRepository.getOrder();
};

export async function getClientByName(name: string) {
    const clients = await clientsRepository.getClientByName(name);
    if (clients.length === 0) throw notFoundError();
    return clients;
};

export async function getClientById(id: number) {
    const client = await clientsRepository.getClientById(id);
    if (!client) throw notFoundError();
    return client;
};

export async function orderByIdCLient(id: number, order: string) {
    return await clientsRepository.orderByIdCLient(id, order);
};

export async function putClient(id: number, params: clientAndAdress) {
    const client = await getClientById(id);

    const cpf = await clientsRepository.findCpf(params);
    if (cpf) throw new Error("Is already a same cpf");

    return await clientsRepository.putClient(id, params);
};

export async function createClient(id: number, params: clientAndAdress) {
    const existingClient = await clientsRepository.findClienteByUser(id);
    if (existingClient) throw new Error("its already a client");

    const existingCpf = await clientsRepository.findCpf(params);
    if (existingCpf) throw new Error("There is already a customer with the same CPF!");

    const user = await userRepository.getUserById(id);
    if (!user) throw notFoundError();

    return await clientsRepository.createClient(id, params);
};

export async function deleteClient(id: number) {
    const client = await getClientById(id);
    return await clientsRepository.deleteClient(id, client.id);
};

export const clientsService = {
    getAllClients,
    getOrder,
    getClientByName,
    getClientById,
    orderByIdCLient,
    putClient,
    createClient,
    deleteClient
}