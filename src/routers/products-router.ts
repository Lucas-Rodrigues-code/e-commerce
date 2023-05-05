import { validateBodyCreateProducts } from "../middlewares/products-validation";
import { createProduct } from "../controllers/products-controller";
import { Router } from "express";

const productsRouter = Router();

productsRouter
    //admin
    .post("/", validateBodyCreateProducts, createProduct)

export { productsRouter };