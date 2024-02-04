import express from "express";
const userRoutes = express.Router();

import { test } from "../controllers/userController.js";

userRoutes.get("/test", test);

export default userRoutes;
