import { userService } from "../services/user-service";
import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password, phone } = req.body;
        const user = await userService.createUser(name, email, password);
        res.status(201).send(user);
    } catch (error) {
        if (error.name === "DuplicatedEmailError") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function userLogin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const tokenUser = await userService.userLogin(email, password);
        res.status(200).send(tokenUser);
    } catch (error) {
        if (error.name === "InvalidCredentialsError") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.sendStatus(500);
    };
};

export async function getUserById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id)
        const user = await userService.getUserById(id);
        res.status(200).send(user);
    } catch (error) {
        if (error.name === "userError") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function updateUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const { name, email, password } = req.body;
        const user = await userService.updateUser(id, name, email, password);
        res.status(200).send(user);
    } catch (error) {
        if (error.name === "userError") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

export async function deleteUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const user = await userService.deleteUser(id);
        res.status(200).send(user);
    } catch (error) {
        if (error.name === "userError") return res.status(401).send(error.message);
        res.sendStatus(500);
    };
};

