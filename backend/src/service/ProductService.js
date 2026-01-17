import Product from "../model/Product.js";
import Category from "../model/Category.js";
import calculateDiscountPercentage from "../util/calculateDiscountPercent.js";

class ProductService {

  async createProduct(data, seller) {
    const {
      title,
      description,
      image,
      mrpPrice,
      sellingPrice,
      quantity,
      color,
      size,
      category,
      category2,
      category3,
    } = data;

    const discountPercent = calculateDiscountPercentage(
      mrpPrice,
      sellingPrice
    );

    const cat1 = await this.createOrGetCategory(category, 1);

    const cat2 = category2
      ? await this.createOrGetCategory(category2, 2, cat1._id)
      : null;

    const finalCategory =
      category3 && cat2
        ? await this.createOrGetCategory(category3, 3, cat2._id)
        : cat2 || cat1;

    const product = new Product({
      title,
      description,
      image,
      mrpPrice,
      sellingPrice,
      discountPercent,
      quantity,
      color, 
      size,  
      seller: seller._id,
      category: finalCategory._id,
    });

    return await product.save();
  }

  async createOrGetCategory(categoryValue, level, parentCategory = null) {
    let category = await Category.findOne({ categoryId: categoryValue });

    if (!category) {
      category = new Category({
        name: categoryValue,
        categoryId: categoryValue,
        level,
        parentCategory,
      });
      category = await category.save();
    }

    return category;
  }
  async deleteProduct(productId) {
    await Product.findByIdAndDelete(productId);
    return "Product Deleted Successfully";
  }

  async updateProduct(productId, updateData) {
    return await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );
  }


  async findProductById(productId) {
    const product = await Product.findById(productId).populate("category");
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async searchProduct(query) {
    return await Product.find({
      title: new RegExp(query, "i"),
    });
  }


  async getProductsBySeller(sellerId) {
    return await Product.find({ seller: sellerId });
  }


  async getAllProducts() {
    return await Product.find().populate("category");
  }
}

export default new ProductService();
