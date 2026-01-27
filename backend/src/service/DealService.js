import Deal from "../model/Deal.js";
import HomeCategory from "../model/HomeCategory.js";

class DealService {
    async getDeals() {
        return await Deal.find().populate("homeCategory");
    }

    async createDeal(dealData) {
        const homeCategory = await HomeCategory.findById(dealData.homeCategory);
        if (!homeCategory) {
            throw new Error("Home category not found");
        }

        const newDeal = new Deal({
            discount: dealData.discount,
            homeCategory: homeCategory._id
        });

        return await newDeal.save().then(d =>
            Deal.findById(d._id).populate("homeCategory")
        );
    }

    async updateDeal(dealId, dealData) {
        const updatedDeal = await Deal.findByIdAndUpdate(
            dealId,
            { discount: dealData.discount },
            { new: true }
        ).populate("homeCategory");

        if (!updatedDeal) {
            throw new Error("Deal not found");
        }

        return updatedDeal;
    }

    async deleteDeal(dealId) {
        const deal = await Deal.findById(dealId);
        if (!deal) {
            throw new Error("Deal not found");
        }
        await Deal.deleteOne({ _id: dealId });
    }
}

export default new DealService();