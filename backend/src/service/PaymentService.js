import razorpay from "../config/razorpayClient.js";
import PaymentStatus from "../domain/PaymentStatus.js";
import PaymentOrder from "../model/PaymentOrder.js";
import Order from "../model/Order.js";
import OrderStatus from "../domain/OrderStatus.js";

class PaymentService {

  async createOrder(user, orders) {
    const amount = orders.reduce(
      (sum, order) => sum + order.totalSellingPrice,
      0
    );

    const paymentOrder = new PaymentOrder({
      amount,
      user: user._id,
      orders: orders.map(order => order._id),
      status: PaymentStatus.PENDING,
    });

    return await paymentOrder.save();
  }

  async getPaymentOrderById(orderId) {
    const paymentOrder = await PaymentOrder.findById(orderId);
    if (!paymentOrder) {
      throw new Error("Payment Order not found");
    }
    return paymentOrder;
  }

  async getPaymentByPaymentLinkId(paymentLinkId) {
    const paymentOrder = await PaymentOrder.findOne({ paymentLinkId });
    if (!paymentOrder) {
      throw new Error("Payment Order not found");
    }
    return paymentOrder;
  }

  async proceedPaymentOrder(paymentOrder, paymentId, paymentLinkId) {
    if (paymentOrder.status !== PaymentStatus.PENDING) return false;

    const payment = await razorpay.paymentLink.fetch(paymentLinkId);

    if (payment.status === "paid") {
      await Promise.all(
        paymentOrder.orders.map(async (orderId) => {
          const order = await Order.findById(orderId);
          if (!order) return;

          order.paymentStatus = PaymentStatus.COMPLETED;
          order.orderStatus = OrderStatus.PLACED;
          await order.save();
        })
      );

      paymentOrder.status = PaymentStatus.COMPLETED;
      await paymentOrder.save();
      return true;
    }

    paymentOrder.status = PaymentStatus.FAILED;
    await paymentOrder.save();
    return false;
  }

  async createRazarpayPaymentLink(user, amount, paymentOrderId) {
    const paymentLink = await razorpay.paymentLink.create({
      amount: amount * 100,
      currency: "INR",
      customer: {
        name: user.name,
        email: user.email,
      },
      notify: {
        sms: true,
        email: true,
      },

      callback_url: `http://localhost:3000/api/payments/payment-success/${paymentOrderId}`,
      callback_method: "get",
    });
    await PaymentOrder.findByIdAndUpdate(paymentOrderId, {
      paymentLinkId: paymentLink.id,
    });

    return paymentLink;
  }
}

export default new PaymentService();
