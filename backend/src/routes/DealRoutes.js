import express from "express";
import DealController from "../controller/dealController.js";
const router = express.Router();

router.get("/", DealController.getAllDeals);
router.post("/", DealController.createDeal);
router.put("/:id", DealController.updateDeal);
router.delete("/:id", DealController.deleteDeal);
export default router;