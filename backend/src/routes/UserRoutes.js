import express from "express";
const router = express.Router();
import userController from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
router.get("/profile",authMiddleware, userController.getUserProfileByJwt);

export default router;
