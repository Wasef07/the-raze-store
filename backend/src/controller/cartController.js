import CartService from "../service/CartService.js";
import CartItemService from "../service/CartItemService.js";
import ProductService from "../service/ProductService.js";

class CartController {

  async findUserCartHandler(req, res) {
    try {
      const user = req.user;
      const cart = await CartService.findUserCart(user);
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addItemToCart(req, res) {
    try {
      const user = req.user;
      const product = await ProductService.findProductById(req.body.productId);

      const cartItem = await CartService.addCartItem(
        user,
        product,
        req.body.size,
        req.body.quantity
      );

      res.status(200).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCartItemHandler(req, res) {
    try {
      const user = req.user;
      await CartItemService.removeCartItem(
        user._id,
        req.params.cartItemId
      );
      res.status(202).json({ message: "Item removed from cart" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCartItemHandler(req, res) {
    try {
      const user = req.user;
      const { quantity } = req.body;
      const cartItemId = req.params.cartItemId;

      let updatedCartItem;
      if (quantity > 0) {
        updatedCartItem = await CartItemService.updateCartItem(
          user._id,
          cartItemId,
          { quantity }
        );
      }

      res.status(202).json(updatedCartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CartController();
