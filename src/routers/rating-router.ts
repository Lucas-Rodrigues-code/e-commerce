import { getRatingByIdProduct } from "../controllers/rating-controller";
import { Router } from "express";

const ratingRouter = Router();

ratingRouter

    //clientes e visitantes
    // /rating?product=1
    .get("/", getRatingByIdProduct)
    .post("/:id")
    //admin
    .delete("/:id")

export { ratingRouter };