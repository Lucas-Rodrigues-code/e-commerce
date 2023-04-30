import { clientAndAdress } from "@/protocols";
import { clientsRepository } from "../repositories/clients-repository";
import { userRepository } from "../repositories/user-repository";

export async function getAllClients() {
    return await clientsRepository.getAllClients();
};

export async function getOrder() {
    return await clientsRepository.getOrder();
};

export async function getClientByName(name: string) {
    const clients = await clientsRepository.getClientByName(name);

    if (clients.length === 0) throw new Error("There is no clients with that name!");
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
    if (!user) throw new Error("There is no user with that id!");

    return await clientsRepository.createClient(id, params);
};

export async function deleteClient(id: number) {
    const client = await clientsRepository.getClientById(id);
    if (!client) throw new Error("you are a not client yet ");
    return await clientsRepository.deleteClient(id, client.user);
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