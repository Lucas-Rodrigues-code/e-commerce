import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import { Router } from "express";
import { createCategory, getAllCategory, getAllCategoryAvailable, getCategoryById } from "../controllers/categories-controller";
import { validateBodyCreateCatgory } from "../middlewares/category-validation";

const categoriesRouter = Router();

categoriesRouter

    .get("/", getAllCategory)
    .get("/available", getAllCategoryAvailable)
    .get("/:id", getCategoryById)
    //admin
    .post("/", validateBodyCreateCatgory, createCategory)
// .put("/:id", updateCategori)
// .delete("/:id", deleteCategori)


export { categoriesRouter };