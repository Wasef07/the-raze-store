import HomeCategory from "../model/HomeCategory.js";

class HomeCategoryService{
    async getAllHomeCategories(){
        return await HomeCategory.find();
    }
    async createHomeCategory(categoryData){
        return await HomeCategory.create(categoryData);
    }
    async createCategories(categoriesData){
        const existingCategories= await HomeCategory.find();
        if(existingCategories.length==0){
            return await HomeCategory.insertMany(categoriesData);
        }
        return existingCategories;
    }
    async updateHomeCategory(categoryId, categoryData){
        const existingCategory = await HomeCategory.findById(categoryId);
        if(!existingCategory){
            throw new Error("Home Category not found");
        }
        return await HomeCategory.findByIdAndUpdate(existingCategory._id, categoryData, {new:true});
    }
}
export default new HomeCategoryService();