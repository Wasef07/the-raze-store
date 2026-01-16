import ProductService from "../service/ProductService.js";

class SellerProductController {
  async getMyProducts(req, res) {
    try {
      const seller = req.seller;
      const products = await ProductService.getProductsBySeller(seller._id);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const seller = req.seller;
      const product = await ProductService.createProduct(req.body, seller);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const seller = req.seller;
      const product = await ProductService.updateProduct(
        req.params.productId,
        seller._id,
        req.body
      );
      res.status(200).json(product);
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const seller = req.seller;
      const message = await ProductService.deleteProduct(
        req.params.productId,
        seller._id
      );
      res.status(200).json({ message });
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts(req.query);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProductById(req, res) {
  try {
    const productId = req.params.productId;
    const product = await ProductService.findProductById(req.params.productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}


  async searchProducts(req, res) {
    try {
      const products = await ProductService.searchProduct(req.query.q);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new SellerProductController();
