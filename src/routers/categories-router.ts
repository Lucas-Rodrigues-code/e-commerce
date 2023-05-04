import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import { Router } from "express";
import { createCategory, getAllCategory } from "../controllers/categories-controller";
import { validateBodyCreateCatgory } from "../middlewares/category-validation";

const categoriesRouter = Router();

categoriesRouter

    .get("/", getAllCategory)
    //.get("/disponiveis", getAllCategoriAvalible)
    //.get("/:id", getCategoriById)
    //admin
    .post("/", validateBodyCreateCatgory, createCategory)
// .put("/:id", updateCategori)
// .delete("/:id", deleteCategori)


export { categoriesRouter };