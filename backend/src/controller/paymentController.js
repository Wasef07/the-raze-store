import PaymentService from "../service/PaymentService.js";
import OrderService from "../service/OrderService.js";
import SellerService from "../service/SellerService.js";
import SellerReportService from "../service/SellerReportService.js";
import TransactionService from "../service/TransactionService.js";

const createPayment = async (req, res) => {
  try {

    const user = req.user;
    const { orderIds } = req.body;

    const orders = await Promise.all(
      orderIds.map((id) => OrderService.findOrderById(id))
    );

    const paymentOrder = await PaymentService.createOrder(user, orders);

    const paymentLink = await PaymentService.createRazarpayPaymentLink(
      user,
      paymentOrder.amount,
      paymentOrder._id
    );


    return res.status(201).json({
      paymentOrderId: String(paymentOrder._id),
      paymentLink: JSON.stringify(paymentLink),
    });

  } catch (error) {
    console.error("CREATE PAYMENT ERROR:", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

const paymentSucessHandler = async (req, res) => {
  const { paymentOrderId } = req.params;

  try {
    const paymentOrder =
      await PaymentService.getPaymentOrderById(paymentOrderId);

    const paymentSuccess = await PaymentService.proceedPaymentOrder(
      paymentOrder,
      null,
      paymentOrder.paymentLinkId,
    );

    if (!paymentSuccess) {
      return res.status(400).json({
        message: "Payment Failed, Please try again",
      });
    }

    for (let orderId of paymentOrder.orders) {
      const order = await OrderService.findOrderById(orderId);

      await TransactionService.createTransaction(orderId);

      const seller = await SellerService.getSellerById(order.seller);
      const sellerReport = await SellerReportService.getSellerReport(seller);

      sellerReport.totalOrders += 1;
      sellerReport.totalEarnings += order.totalSellingPrice;
      sellerReport.totalSales += order.orderItems.length;

      await SellerReportService.updateSellerReport(sellerReport);
    }

    return res.status(201).json({
      message: "Payment Successful and Order Placed",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  createPayment,
  paymentSucessHandler,
};
