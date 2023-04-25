import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routers";
import { clientRouter } from "./routers/clients-router";

const app = express();
app
    .use(cors())
    .use(json())
    .get("/health", (_req, res) => res.send("ok"))
    .use("/",userRouter)
    .use("/clients",clientRouter)

export default app;
