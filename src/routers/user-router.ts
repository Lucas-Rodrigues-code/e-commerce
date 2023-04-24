import createUser, { deleteUser, getAllUsers, getUserById, updateUser, userLogin } from "../controllers/user-controller";
import { validateBodyCreateUser, validateBodyLoginUser, validateBodyUpdateUser } from "../middlewares/user-validation";

import { Router } from "express";

const userRouter = Router();

userRouter
    .get("/users", getAllUsers)
    .get("/users/:id", getUserById)

    .post("/login", validateBodyLoginUser, userLogin)
    .post("/register", validateBodyCreateUser, createUser)
    .put("/update/:id", validateBodyUpdateUser, updateUser)
    .delete("/delete/:id", deleteUser)
export { userRouter };