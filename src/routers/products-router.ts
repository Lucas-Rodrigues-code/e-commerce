import { validateBodyCreateProducts, validateBodyUpdateProducts } from "../middlewares/products-validation";
import { createProduct, deleteProduct, updateProduct } from "../controllers/products-controller";
import { Router } from "express";

const productsRouter = Router();

productsRouter
    //admin
    .post("/", validateBodyCreateProducts, createProduct)
    .put("/:id", validateBodyUpdateProducts, updateProduct)
    .delete("/:id", deleteProduct)

export { productsRouter };