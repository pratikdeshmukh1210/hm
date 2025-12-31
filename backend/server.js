import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import { router as authRouter } from "./Router/auth.routes.js";
import { router as productRouter } from "./Router/product.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
connectDB();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(3000, () => {
  console.log("running port 3000");
});

