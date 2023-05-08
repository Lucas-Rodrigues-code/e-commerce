import { createRatingSchema } from "../schemas/rating-schema";
import { Request, Response, NextFunction } from "express";

export function validateBodyCreateRating(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = createRatingSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}