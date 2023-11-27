import express from "express";
import { route } from "./routes.js";
import cors from "cors";

const app = express();
app.use(route);
app.use(express.json());

export default app;
