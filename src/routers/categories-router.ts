import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import { Router } from "express";
import { getAllCategory } from "../controllers/categories-controller";

const categoriesRouter = Router();

categoriesRouter

    .get("/", getAllCategory)
/*     .get("/disponiveis", getAllCategoriAvalible)
    .get("/:id", getCategoriById)
    //admin
    .post("/", createCategori)
    .put("/:id", updateCategori)
    .delete("/:id",deleteCategori) */


export { categoriesRouter };