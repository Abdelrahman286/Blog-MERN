import express from "express";
import { signup } from "../controllers/authController.js";

const authRoutes = express.Router();

// authRoutes.get()

authRoutes.post("/signup", signup);

export default authRoutes;
