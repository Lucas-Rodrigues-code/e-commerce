import { validateBodyCreateProducts, validateBodyUpdateProducts } from "../middlewares/products-validation";
import { createProduct, updateProduct } from "../controllers/products-controller";
import { Router } from "express";

const productsRouter = Router();

productsRouter
    //admin
    .post("/", validateBodyCreateProducts, createProduct)
    .put("/:id", validateBodyUpdateProducts, updateProduct)

export { productsRouter };