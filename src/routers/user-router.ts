import { validateBodyCreateUser, validateBodyLoginUser } from "../middlewares/user-validation";
import createUser, { userLogin } from "../controllers/user-controller";
import { Router } from "express";

const userRouter = Router();

userRouter
    .get("/")
    .get("/:id")

    .post("/login",validateBodyLoginUser,userLogin)
    .post("/register",validateBodyCreateUser,createUser)
    .put("/")
    .delete("/")
export { userRouter };