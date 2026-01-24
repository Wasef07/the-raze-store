import PaymentOrder from "../model/PaymentOrder.js";
import CartService from "../service/CartService.js";
import OrderService from "../service/OrderService.js";
import PaymentService from "../service/PaymentService.js";

class OrderController {
  async createOrder(req, res) {
    try {
      const { shippingAddress } = req.body;
      const user = req.user;

      const cart = await CartService.findUserCart(user);

      const orders = await OrderService.createOrder(
        user,
        shippingAddress,
        cart,
      );

      // ✅ ONLY return orders
      // Payment will be handled separately
      return res.status(201).json({
        orders,
        message: "Order created successfully. Proceed to payment.",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const { orderId } = req.params;
      const order = await OrderService.findOrderById(orderId);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async getOrderItemById(req, res) {
    try {
      const { orderItemId } = req.params;
      const orderItem = await OrderService.findOrderItemById(orderItemId);
      return res.status(200).json(orderItem);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async getUserOrderHistory(req, res) {
    try {
      const userId = req.user._id;
      const orders = await OrderService.usersOrderHistory(userId);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getSellerOrders(req, res) {
    try {
      const sellerId = req.seller._id;
      const orders = await OrderService.getSellerOrders(sellerId);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateOrderStatus(req, res) {
    try {
      const { orderId } = req.params;
      const { orderStatus } = req.body;

      const updatedOrder = await OrderService.updateOrderStatus(
        orderId,
        orderStatus,
      );

      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async cancelOrder(req, res) {
    try {
      const { orderId } = req.params;
      const user = req.user;

      const cancelledOrder = await OrderService.cancelOrder(orderId, user);

      return res
        .status(200)
        .json({ message: "Order cancelled", order: cancelledOrder });
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  }
}

export default new OrderController();
