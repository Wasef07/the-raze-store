import SellerReport from "../model/SellerReport.js";
class SellerReportService {
    async getSellerReport(seller) {
        try{
            let sellerReport = await SellerReport.findOne({seller:seller._id});
            if(!sellerReport){
                sellerReport = new SellerReport({
                    seller:seller._id,
                    totalOrders:0,
                    totalEarnings:0,
                    totalSales:0,
                });
            sellerReport = await sellerReport.save();
            }
            return sellerReport;
        }catch(error){
            throw new Error("Error in fetching Seller Report: "+error.message);
        }   
    }
    async updateSellerReport(sellerReport){
        try{
            const updatedReport = await SellerReport.findByIdAndUpdate(
                sellerReport._id,
                sellerReport,
                {new:true}
            );
            return updatedReport;
        }catch(error){
            throw new Error("Error in updating Seller Report: "+error.message);
        }
    }
}

export default new SellerReportService();