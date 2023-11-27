import express from "express";
export const route = express.Router();
import cors from "cors";
import userController from "./controllers/userController.js";

route.use(express.json());
route.use(cors());

//Index
route.get("/", (req, res) => {
    res.send("<h1>User API</h1>");
});

route.get("/users", userController.index);

route.get("/users/:id", userController.show);

route.post("/users", userController.storage);

route.put("/users/:id", userController.update);

route.delete("/users/:id", userController.delete);
