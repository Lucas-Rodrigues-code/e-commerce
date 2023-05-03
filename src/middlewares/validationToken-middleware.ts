import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).send({ message: "You must be signed in to continue" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).send({ message: "You must be signed in to continue" });
    try {
        const { userId, role } = jwt.verify(token, process.env.JWT_SECRET,) as JWTPayload
        res.locals.userId = userId;
        res.locals.role = role;
        next();
    } catch (err) {
        if (err.name === "JsonWebTokenError") {
            return res.status(401).send({ message: "You must be signed in to continue" });
        }

    }
}


export async function authenticateRoleAdmin(req: Request, res: Response, next: NextFunction) {
    if (res.locals.role !== "admin") {
        return res.status(403).send({ message: "Você não tem permissão para acessar esta rota" });
    }
    next()
}
type JWTPayload = {
    userId: number;
    role: "client" | "admin";
};