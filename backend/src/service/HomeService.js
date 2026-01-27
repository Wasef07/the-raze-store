import HomeCategorySection from "../domain/HomeCategorySection";
import DealService from "./DealService";

class HomeService {
  async createHomePageData(categories) {
    const gridCategories = categories.filter((category) => category.section===HomeCategorySection.GRID);
    const shopByCategories = categories.filter(
      (category) => category.section === HomeCategorySection.SHOP_BY_CATEGORIES
    );
    const electricCategories = categories.filter(
      (category) => category.section === HomeCategorySection.ELECTRIC_CATEGORIES
    );
    
    const dealsCategories = categories.filter(
        (category) => category.section === HomeCategorySection.DEALS
    );
    const deals = await DealService.getDeals();
    const home = {
      grid: gridCategories,
      shopByCategories: shopByCategories,
      electricCategories: electricCategories,
      deals: deals,
      dealsCategories: dealsCategories,
    };
    return home;
  }
}
export default new HomeService();
