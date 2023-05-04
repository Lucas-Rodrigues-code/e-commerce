import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import { Router } from "express";
import {
    createCategory, getAllCategory, getAllCategoryAvailable, getCategoryById,
    updateCategory
} from "../controllers/categories-controller";
import { validateBodyCreateCatgory, validateBodyUpdateCatgory } from "../middlewares/category-validation";

const categoriesRouter = Router();

categoriesRouter

    .get("/", getAllCategory)
    .get("/available", getAllCategoryAvailable)
    .get("/:id", getCategoryById)
    //admin
    .post("/", validateBodyCreateCatgory, createCategory)
    .put("/:id", validateBodyUpdateCatgory, updateCategory)
// .delete("/:id", deleteCategori)


export { categoriesRouter };