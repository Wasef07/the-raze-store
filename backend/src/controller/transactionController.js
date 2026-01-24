import TransactionService from "../service/TransactionService.js";

class TransactionController{
    async getTransactionsBySeller(req,res){ 
        try{
            const seller = req.seller;
            const transactions = await TransactionService.getTransactionBySellerId(seller._id);
            return res.status(200).json({
                transactions,
            });
        }catch(error){
            return res.status(500).json({
                message:error.message,
            });
        }
    }
}

export default new TransactionController();