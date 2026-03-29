import Product from "../model/Product.js";
import Category from "../model/Category.js";
import calculateDiscountPercentage from "../util/calculateDiscountPercent.js";
import mongoose from "mongoose";

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

    const discountPercent = calculateDiscountPercentage(mrpPrice, sellingPrice);

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
    return await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });
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

  async getAllProducts(query) {
    const { categoryId, pageNumber = 0, pageSize = 10, sort } = query;

    let filter = {};

    // ✅ FIXED LOGIC
    if (categoryId) {
      const category = await Category.findOne({ categoryId });

      if (category) {
        filter.category = category._id; // correct ObjectId
      } else {
        return {
          content: [],
          totalElements: 0,
          totalPages: 0,
        };
      }
    }

    let sortOption = {};
    if (sort === "price_low") sortOption.sellingPrice = 1;
    if (sort === "price_high") sortOption.sellingPrice = -1;

    const totalElements = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .populate("category")
      .populate("seller")
      .sort(sortOption)
      .skip(pageNumber * pageSize)
      .limit(Number(pageSize));

    return {
      content: products,
      totalElements,
      totalPages: Math.ceil(totalElements / pageSize),
    };
  }
}

export default new ProductService();
