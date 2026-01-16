import express from "express";
import productController from "../controller/productController.js";
import sellerAuthMiddleware from "../middleware/sellerAuthMiddleware.js";

const router = express.Router();

router.use(sellerAuthMiddleware);

// SELLER ROUTES
router.get("/", productController.getMyProducts);
router.post("/", productController.createProduct);
router.patch("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

export default router;
