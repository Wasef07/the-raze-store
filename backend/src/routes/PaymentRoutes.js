import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import paymentController from "../controller/paymentController.js";
const router = express.Router();


router.post(
  "/create",
  authMiddleware,
  paymentController.createPayment
);

// ✅ Existing success callback
router.get(
  "/payment-success/:paymentOrderId",
  authMiddleware,
  paymentController.paymentSucessHandler
);

export default router;

