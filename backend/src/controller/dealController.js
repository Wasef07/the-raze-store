import DealService from "../service/DealService.js";

class DealController {
  async getAllDeals(req, res) {
    try {
      const deals = await DealService.getDeals();
      return res.status(201).json({
        deals: deals,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  async createDeal(req, res) {
    try {
      const dealData = req.body;
      const newDeal = await DealService.createDeal(dealData);
      return res.status(201).json({
        deal: newDeal,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  async updateDeal(req, res) {
    const { id } = req.params;
    const dealData = req.body;
    try {
      const updatedDeal = await DealService.updateDeal(id, dealData);
      return res.status(200).json({
        deal: updatedDeal,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  async deleteDeal(req, res) {
    const { id } = req.params;
    try {
      await DealService.deleteDeal(id);
      return res.status(200).json({
        message: "Deal deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
export default new DealController();
