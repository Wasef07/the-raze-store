import express from "express";
import transactionController from "../controller/transactionController.js";
import sellerMiddleware from "../middleware/sellerAuthMiddleware.js";
const router = express.Router();

router.get('/seller',sellerMiddleware,transactionController.getTransactionsBySeller);
export default router;