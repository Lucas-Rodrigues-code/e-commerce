import { validateBodyCreateProducts, validateBodyUpdateProducts } from "../middlewares/products-validation";
import { createProduct, deleteProduct, getAllProductAvailable, getAllProducts, getProductByName, updateProduct } from "../controllers/products-controller";
import { Router } from "express";

const productsRouter = Router();

productsRouter
    //admin
    .post("/", validateBodyCreateProducts, createProduct)
    .put("/:id", validateBodyUpdateProducts, updateProduct)
    .delete("/:id", deleteProduct)
    // visitors 
    .get("/", getAllProducts)
    .get("/available", getAllProductAvailable)
    .get("/search/:search", getProductByName)

export { productsRouter };