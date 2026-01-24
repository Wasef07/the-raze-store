import express from "express";
import connectDB from "./db/db.js";

import adminRoutes from "./routes/AdminRoutes.js";
import sellerRoutes from "./routes/SellerRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/UserRoutes.js"
import sellerProductRoutes from "./routes/SellerProductRoutes.js";
import productRoutes from "./routes/ProductRoutes.js"
import cartRoutes from "./routes/CartRoutes.js"
import orderRoutes from "./routes/OrderRoutes.js"
import sellerOrderRoutes from "./routes/SellerOrderRoutes.js"
import paymentRoutes from "./routes/PaymentRoutes.js";
import transactionRoutes from "./routes/TransactionRoutes.js";
import sellerReportRoutes from "./routes/SellerReportRoutes.js";
// import homeCategoryRoutes from "./routes/HomeCategoryRoutes.js";
// import dealRoutes from "./routes/DealRoutes.js";


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

app.use("/products",productRoutes);
app.use("/api/sellers/products",sellerProductRoutes)

app.use("/api/cart",cartRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/seller/orders",sellerOrderRoutes);

app.use("/api/payments",paymentRoutes);
app.use("/api/transactions",transactionRoutes);
app.use("/api/seller/reports",sellerReportRoutes);

app.use("/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/sellers", sellerRoutes);

app.use("/admin", adminRoutes);

// app.use("/admin/deals", dealRoutes);
// app.use("/home", homeCategoryRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
