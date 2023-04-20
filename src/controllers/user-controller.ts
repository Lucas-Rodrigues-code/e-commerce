import { userService } from "../services/user-service";
import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password, phone } = req.body;
        const user = await userService.createUser(name, email, password);
        res.status(201).send(user);
    } catch (error) {
        console.log(error)
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

