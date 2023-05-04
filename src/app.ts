import express, { json } from "express";
import cors from "cors";
import { userRouter, clientRouter, categoriesRouter } from "./routers";


const app = express();
app
    .use(cors())
    .use(json())
    .get("/health", (_req, res) => res.send("ok"))
    .use("/", userRouter)
    .use("/clients", clientRouter)
    .use("/categories", categoriesRouter)

export default app;
