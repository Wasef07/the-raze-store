import Cart from "../model/Cart.js";
import CartItem from "../model/CartItem.js";
import calculateDiscountPercentage from "../util/calculateDiscountPercent.js";

class CartService {

  async findUserCart(user) {
    let cart = await Cart.findOne({ user: user._id });

    if (!cart) {
      cart = await Cart.create({ user: user._id, cartItems: [] });
    }

    const cartItems = await CartItem.find({ cart: cart._id }).populate("product");

    let totalMrp = 0;
    let totalSelling = 0;

    cartItems.forEach(item => {
      totalMrp += item.mrpPrice;
      totalSelling += item.sellingPrice;
    });

    cart.cartItems = cartItems;
    cart.totalMrpPrice = totalMrp;
    cart.totalSellingPrice = totalSelling;
    cart.totalItems = cartItems.length;
    cart.discount = calculateDiscountPercentage(totalMrp, totalSelling);

    return cart;
  }

  async addCartItem(user, product, size, quantity) {
    const cart = await this.findUserCart(user);

    let isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      size: size,
    });

    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        quantity,
        userId: user._id,
        sellingPrice: quantity * product.sellingPrice,
        mrpPrice: quantity * product.mrpPrice,
        size,
        cart: cart._id,
      });

      return await cartItem.save();
    }

    return isPresent;
  }
}

export default new CartService();
