import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import { Router } from "express";
import {
    createCategory, deleteCategory, getAllCategory, getAllCategoryAvailable,
    getCategoryById, updateCategory
} from "../controllers/categories-controller";
import { validateBodyCreateCatgory, validateBodyUpdateCatgory } from "../middlewares/category-validation";

const categoriesRouter = Router();

categoriesRouter
    .all("/*", authenticateToken)
    .get("/", getAllCategory)
    .get("/available", getAllCategoryAvailable)
    .get("/:id", getCategoryById)
    //admin
    .post("/", authenticateRoleAdmin, validateBodyCreateCatgory, createCategory)
    .put("/:id", authenticateRoleAdmin, validateBodyUpdateCatgory, updateCategory)
    .delete("/:id", authenticateRoleAdmin, deleteCategory)


export { categoriesRouter };