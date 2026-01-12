import express from "express";
const router = express.Router();
import sellerController from "../controller/sellerController.js";
import sellerMiddleware from "../middleware/sellerAuthMiddleware.js";

router.get("/profile",sellerMiddleware, sellerController.getSellerProfile);
router.post("/", sellerController.createSeller);
router.get("/", sellerController.getAllSeller);
router.patch("/", sellerMiddleware, sellerController.updateSeller);
router.post("/verify/login-otp",sellerController.verifyLoginOtp);

export default router;

