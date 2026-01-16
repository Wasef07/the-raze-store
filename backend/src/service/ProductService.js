import Product from "../model/Product.js";
import Category from "../model/Category.js";

/**
 * Utility function
 */
const calculateDiscountPercentage = (mrpPrice, sellingPrice) => {
  if (mrpPrice <= 0) {
    throw new Error("MRP Price should be greater than Zero");
  }
  const discount = mrpPrice - sellingPrice;
  return Math.round((discount / mrpPrice) * 100);
};

class ProductService {
  /**
   * CREATE PRODUCT (VIDEO STYLE)
   * Categories are auto-created
   */
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

    // LEVEL 1 CATEGORY
    const cat1 = await this.createOrGetCategory(category, 1);

    // LEVEL 2 CATEGORY
    const cat2 = category2
      ? await this.createOrGetCategory(category2, 2, cat1._id)
      : null;

    // LEVEL 3 CATEGORY (FINAL ONE USED IN PRODUCT)
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
      color, // array of strings
      size,  // array of strings
      seller: seller._id,
      category: finalCategory._id, // ObjectId
    });

    return await product.save();
  }

  /**
   * CREATE OR GET CATEGORY (VIDEO STYLE)
   */
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

  /**
   * DELETE PRODUCT
   */
  async deleteProduct(productId) {
    await Product.findByIdAndDelete(productId);
    return "Product Deleted Successfully";
  }

  /**
   * UPDATE PRODUCT
   */
  async updateProduct(productId, updateData) {
    return await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );
  }

  /**
   * FIND PRODUCT BY ID
   */
  async findProductById(productId) {
    const product = await Product.findById(productId).populate("category");
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  /**
   * SEARCH PRODUCTS
   */
  async searchProduct(query) {
    return await Product.find({
      title: new RegExp(query, "i"),
    });
  }

  /**
   * GET PRODUCTS BY SELLER
   */
  async getProductsBySeller(sellerId) {
    return await Product.find({ seller: sellerId });
  }

  /**
   * GET ALL PRODUCTS
   */
  async getAllProducts() {
    return await Product.find().populate("category");
  }
}

export default new ProductService();
