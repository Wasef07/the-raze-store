import mongoose from "mongoose";
import Address from "../model/Address.js";
import Order from "../model/Order.js";
import OrderItem from "../model/OrderItem.js";
import User from "../model/User.js";
import OrderStatus from "../domain/OrderStatus.js";

class OrderService {
  async createOrder(user, shippingAddress, cart) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // 1️⃣ Handle address
      if (!shippingAddress._id) {
        shippingAddress = await Address.create([shippingAddress], { session });
        shippingAddress = shippingAddress[0];

        await User.findByIdAndUpdate(
          user._id,
          { $addToSet: { addresses: shippingAddress._id } },
          { session }
        );
      }

      // 2️⃣ Group cart items by seller
      const itemsBySeller = cart.cartItems.reduce((acc, item) => {
        const sellerId = item.product.seller._id.toString();
        acc[sellerId] = acc[sellerId] || [];
        acc[sellerId].push(item);
        return acc;
      }, {});

      const orders = [];

      // 3️⃣ Create order per seller
      for (const [sellerId, cartItems] of Object.entries(itemsBySeller)) {
        const totalMrpPrice = cartItems.reduce(
          (sum, item) => sum + item.mrpPrice * item.quantity,
          0
        );

        const totalSellingPrice = cartItems.reduce(
          (sum, item) => sum + item.sellingPrice * item.quantity,
          0
        );

        const discount = totalMrpPrice - totalSellingPrice;
        const totalItem = cartItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        const order = new Order({
          user: user._id,
          seller: sellerId,
          shippingAddress: shippingAddress._id,
          totalMrpPrice,
          totalSellingPrice,
          discount,
          totalItem,
          orderStatus: OrderStatus.PENDING,
          orderItems: [],
        });

        // 4️⃣ Create order items
        for (const cartItem of cartItems) {
          const orderItem = new OrderItem({
            product: cartItem.product._id,
            size: cartItem.size,
            quantity: cartItem.quantity,
            mrpPrice: cartItem.mrpPrice,
            sellingPrice: cartItem.sellingPrice,
          });

          const savedOrderItem = await orderItem.save({ session });
          order.orderItems.push(savedOrderItem._id);
        }

        const savedOrder = await order.save({ session });
        orders.push(savedOrder);
      }

      await session.commitTransaction();
      session.endSession();

      return orders;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

  async findOrderById(orderId) {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      throw new Error("Invalid Order Id");
    }

    const order = await Order.findById(orderId).populate([
      { path: "seller" },
      { path: "orderItems", populate: { path: "product" } },
      { path: "shippingAddress" },
    ]);

    if (!order) {
      throw new Error("Order not found");
    }

    return order;
  }

  async usersOrderHistory(userId) {
    return Order.find({ user: userId })
      .sort({ orderDate: -1 })
      .populate([
        { path: "seller" },
        { path: "orderItems", populate: { path: "product" } },
        { path: "shippingAddress" },
      ]);
  }

  async getSellerOrders(sellerId) {
    return Order.find({ seller: sellerId })
      .sort({ orderDate: -1 })
      .populate([
        { path: "seller" },
        { path: "orderItems", populate: { path: "product" } },
        { path: "shippingAddress" },
      ]);
  }

  async updateOrderStatus(orderId, status) {
    const order = await this.findOrderById(orderId);
    order.orderStatus = status;
    return order.save();
  }

  async cancelOrder(orderId, user) {
    const order = await this.findOrderById(orderId);

    if (user._id.toString() !== order.user.toString()) {
      throw new Error("You can't cancel this order");
    }

    order.orderStatus = OrderStatus.CANCELLED;
    return order.save();
  }

  async findOrderItemById(orderItemId) {
    if (!mongoose.Types.ObjectId.isValid(orderItemId)) {
      throw new Error("Invalid Order Item Id");
    }

    const orderItem = await OrderItem.findById(orderItemId).populate("product");

    if (!orderItem) {
      throw new Error("Order Item not found");
    }

    return orderItem;
  }
}

export default new OrderService();
