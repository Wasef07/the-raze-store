import express from "express";
import authController from "../controller/authController.js";

const router = express.Router();

router.post(
  "/send/login-signup-otp",
  authController.sendLoginOtp
);

export default router;
