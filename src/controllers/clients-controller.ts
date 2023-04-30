import { clientsService } from "../services/clients-service";
import { Request, Response } from "express";

async function handleRequest(promise: Promise<any>, res: Response, successCode: number) {
    try {
        const data = await promise;
        res.status(successCode).send(data);
    } catch (error) {
        if (error.name === "Error") return res.status(401).send(error.message);
        res.status(500).send("Internal server error");
    };
};
// admin routes
export async function getAllClients(req: Request, res: Response) {
    handleRequest(clientsService.getAllClients(), res, 200);
};

export async function getOrder(req: Request, res: Response) {
    handleRequest(clientsService.getOrder(), res, 200);
};

export async function getClientByName(req: Request, res: Response) {
    const name = req.params.search.toLowerCase();
    handleRequest(clientsService.getClientByName(name), res, 200);
};

export async function getClientById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(clientsService.getClientById(id), res, 200);
};

export async function getOrderByIdCLient(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const order = req.params.order;
    handleRequest(clientsService.orderByIdCLient(id, order), res, 200);
};

// client 
export async function createClient(req: Request, res: Response) {
    const idUser = req.body;
    handleRequest(clientsService.createClient(idUser.id, { ...req.body }), res, 201);
};

export async function putClient(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    handleRequest(clientsService.putClient(id, { ...req.body }), res, 200)
};

export async function deleteClient(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(clientsService.deleteClient(id), res, 200);
};