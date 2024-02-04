// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

// THIS WILL ALLOW TO SEND JSON IN REQUEST BODY
app.use(express.json());
dotenv.config();

// DATABASE CONNECT
mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

// USER ROUTES
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server Error";
  res.status(statusCode).json({ success: false, message, statusCode });
});

// APP PORT
app.listen(3000, () => {
  console.log("server runing");
});
