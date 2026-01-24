import Order from "../model/Order.js";
import Transaction from "../model/Transaction.js";

class TransactionService {
  async createTransaction(orderId) {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order not found for creating transaction");
    }

    const transaction = new Transaction({
      seller: order.seller,
      order: order._id,
      customer: order.user,
    });

    return await transaction.save();
  }

  async getTransactionBySellerId(sellerId) {
    return Transaction.find({ seller: sellerId })
      .populate("order")
      .populate("customer");
  }

  async getAllTransactions() {
    return Transaction.find()
      .populate("order")
      .populate("seller")
      .populate("customer");
  }
}

export default new TransactionService();
