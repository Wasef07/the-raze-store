import HomeCategoryService from "../service/HomeCategoryService.js";

class HomeCategoryController {
    async createHomeCategory(req, res) {
        try {
            const categoryData = req.body;
            const newCategory = await HomeCategoryService.createHomeCategory(categoryData);

            return res.status(201).json({
                category: newCategory,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async getHomeCategories(req, res) {
        try {
            const categories = await HomeCategoryService.getAllHomeCategories();
            return res.status(200).json({
                categories,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async updateHomeCategory(req, res) {
        try {
            const { id } = req.params;
            const categoryData = req.body;

            const updatedCategory = await HomeCategoryService.updateHomeCategory(
                id,
                categoryData
            );

            return res.status(200).json({
                category: updatedCategory,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default new HomeCategoryController();
