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


export async function createClient(id: number, params: clientAndAdress) {
    const adress = await prisma.address.create({
        data: {
            street: params.street,
            number: params.number,
            complement: params.complement,
            city: params.city,
            state: params.state,
            cep: params.cep
        }
    })

    const client = await prisma.clients.create({
        data: {
            user: id,
            name: params.name,
            birthday: params.birthday,
            cpf: params.cpf,
            phone: params.phone,
            address: adress.id
        }
    })

    return {
        name: client.name,
        birthday: client.birthday,
        cpf: client.cpf,
        phone: client.phone,
        adress: {
            street: adress.street,
            number: adress.number,
            complement: adress.complement,
            city: adress.city,
            state: adress.state,
            cep: adress.cep
        }
    }
};

export async function findCpf(params: clientAndAdress) {
    return await prisma.clients.findFirst({
        where: { cpf: params.cpf || "0" },
        rejectOnNotFound: false
    })
};

export async function findClienteByUser(id: number) {
    return await prisma.clients.findFirst({
        where: { user: id }
    })
};

export async function deleteClient(id: number,userId:number) {
    console.log(userId)
    return await prisma.$transaction([
        prisma.clients.update({
            where:{id},
            data:{
                excluded:true
            }
        }),

        prisma.users.delete({
            where:{id:userId}
        })
    ])
};


export const clientsRepository = {
    getAllClients,
    getOrder,
    getClientByName,
    getClientById,
    orderByIdCLient,
    putClient,
    createClient,
    findCpf,
    findClienteByUser,
    deleteClient
};