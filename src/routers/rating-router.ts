import { authenticateToken } from "../middlewares/validationToken-middleware";
import { createRating, getRatingByIdProduct } from "../controllers/rating-controller";
import { Router } from "express";
import { validateBodyCreateRating } from "../middlewares/rating-validation";

const ratingRouter = Router();

ratingRouter

    //clientes e visitantes
    // /rating?product=1
    .get("/", getRatingByIdProduct)
    .post("/:id", validateBodyCreateRating, authenticateToken, createRating)
    //admin
    .delete("/:id")

export { ratingRouter };