import express from "express";
import HomeCategoryController from "../controller/homeCategoryController.js";
const router = express.Router();

router.post("/categories", HomeCategoryController.createHomeCategory);
router.get("/home-category", HomeCategoryController.getHomeCategories);
router.patch("/home-category/:id", HomeCategoryController.updateHomeCategory);

export default router;