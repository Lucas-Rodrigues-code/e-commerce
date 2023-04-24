import { NextFunction, Request, Response } from "express";
import { userCreateSchema, userLoginSchema, userUpdateSchema } from "../schemas/user-schemas";

export function validateBodyCreateUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = userCreateSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}

export function validateBodyLoginUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = userLoginSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}

export function validateBodyUpdateUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = userUpdateSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}