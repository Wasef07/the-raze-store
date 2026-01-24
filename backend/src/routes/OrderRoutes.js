import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import orderController from "../controller/orderController.js";
const router = express.Router();

router.post("/",authMiddleware,orderController.createOrder);
router.get("/user",authMiddleware,orderController.getUserOrderHistory);
router.put("/:orderId/cancel",authMiddleware,orderController.cancelOrder);
router.get("/:orderId",authMiddleware,orderController.getOrderById);
router.get("/item/:orderItemId",authMiddleware,orderController.getOrderItemById);

export default router;