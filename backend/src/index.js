import express from "express";
import connectDB from "./db/db.js";
import adminRoutes from "./routes/AdminRoutes.js";
import sellerRoutes from "./routes/SellerRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/UserRoutes.js"
import sellerProductRoutes from "./routes/SellerProductRoutes.js";
import productRoutes from "./routes/ProductRoutes.js"
import cartRoutes from "./routes/CartRoutes.js"
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
app.use("/products",productRoutes);
app.use("/api/sellers/products",sellerProductRoutes)
app.use("/admin", adminRoutes);
app.use("/api/cart",cartRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
