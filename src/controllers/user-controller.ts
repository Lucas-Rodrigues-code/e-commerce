import { userService } from "../services/user-service";
import { Request, Response } from "express";

async function handleRequest(promise: Promise<any>, res: Response, successCode: number) {
    try {
        const data = await promise;
        res.status(successCode).send(data);
    } catch (error) {
        if (error.name === "DuplicatedEmailError") return res.status(401).send(error.message);
        if (error.name === "InvalidCredentialsError") return res.status(401).send(error.message);
        if (error.name === "userError") return res.status(401).send(error.message);
        if (error.name === "Error") return res.status(401).send(error.message);
        res.status(500).send("Internal server error");
    };
};

export default async function createUser(req: Request, res: Response) {
    const { name, email, password, phone } = req.body;
    handleRequest(userService.createUser(name, email, password), res, 201);
};

export async function userLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    handleRequest(userService.userLogin(email, password), res, 200);
};

export async function getAllUsers(req: Request, res: Response) {
    handleRequest(userService.getAllUsers(), res, 200)
};

export async function getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(userService.getUserById(id), res, 200);
};

export async function updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, email, password } = req.body;
    handleRequest(userService.updateUser(id, name, email, password), res, 200);
};

export async function deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(userService.deleteUser(id), res, 200);
};