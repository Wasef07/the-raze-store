import express from "express";
import connectDB from "./db/db.js";
import adminRoutes from "./routes/AdminRoutes.js";
import sellerRoutes from "./routes/SellerRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/UserRoutes.js"
import { body } from "express-validator";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to The Raze Store");
});

app.use("/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/sellers", sellerRoutes);
app.use("/admin", adminRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
