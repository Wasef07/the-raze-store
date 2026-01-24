import express from "express";
import sellerMiddleware from "../middleware/sellerAuthMiddleware.js";
import sellerReportController from "../controller/sellerReportController.js";
const router = express.Router();


router.get("/",sellerMiddleware,sellerReportController.getSellerReports);

export default router;