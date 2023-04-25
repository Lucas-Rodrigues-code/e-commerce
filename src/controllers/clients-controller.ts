import { clientsService } from "../services/clients-service";
import { Request, Response } from "express";

export async function getAllClients(req: Request, res: Response) {
    try {
        const clients = await clientsService.getAllClients();
        res.status(200).send(clients);
    } catch (error) {
        res.sendStatus(500);
    };
};

export async function getOrder(req: Request, res: Response) {
    try {
        const order = await clientsService.getOrder();
        res.status(200).send(order);
    } catch (error) {
        res.sendStatus(500);
    };
};

export async function getClientByName(req: Request, res: Response) {
    const name = req.params.search.toLowerCase();
    try {
        const clients = await clientsService.getClientByName(name);
        res.status(200).send(clients);
    } catch (error) {
        if (error.name === "Error") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function getClientById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const client = await clientsService.getClientById(id);
        res.status(200).send(client);
    } catch (error) {
        if (error.name === "Error") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function getOrderByIdCLient(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const order = req.params.order
    try {
        const orders = await clientsService.orderByIdCLient(id, order);
        res.status(200).send(orders);
    } catch (error) {
        res.sendStatus(500);
    };
};

export async function putClient(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    try {
        const client = await clientsService.putClient(id, { ...req.body });
        res.status(200).send(client);
    } catch (error) {
        res.sendStatus(500);
    };
};