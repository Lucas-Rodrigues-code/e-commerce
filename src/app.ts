import express, { json } from "express";
import cors from "cors";

const app = express();
app
    .use(cors())
    .use(json())
    .get("/health", (_req, res) => res.send("ok"));

export default app;
