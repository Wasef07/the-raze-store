import SellerReportService from "../service/SellerReportService.js";

class sellerReportController {
    async getSellerReports(req, res) {
        try {
            const seller = req.seller;
            const report = await SellerReportService.getSellerReport(seller);
            return res.status(200).json({
                report,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}
export default new sellerReportController();