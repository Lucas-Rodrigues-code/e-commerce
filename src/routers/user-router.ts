import createUser, { deleteUser, getAllUsers, getUserById, updateUser, userLogin } from "../controllers/user-controller";
import { validateBodyCreateUser, validateBodyLoginUser, validateBodyUpdateUser } from "../middlewares/user-validation";
import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";

import { Router } from "express";

const userRouter = Router();

userRouter
    .get("/", authenticateToken, getAllUsers)
    .get("/:id", authenticateToken, getUserById)

    .post("/login", validateBodyLoginUser, userLogin)
    .post("/register", validateBodyCreateUser, createUser)
    .put("/update/:id", authenticateToken, validateBodyUpdateUser, updateUser)
    .delete("/delete/:id", authenticateToken, deleteUser)
export { userRouter };