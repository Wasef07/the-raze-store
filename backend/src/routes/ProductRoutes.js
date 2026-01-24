import express from "express";
import productController from "../controller/productController.js";

const router = express.Router();

// PUBLIC ROUTES (NO seller middleware)
router.get("/", productController.getAllProducts);
router.get("/search", productController.searchProducts);
router.get("/:productId", productController.getProductById);

export default router;
