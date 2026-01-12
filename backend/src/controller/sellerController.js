import sellerService from "../service/SellerService.js";
import VerificationCode from "../model/VerificationCode.js";
import jwtProvider from "../util/jwtProvider.js";
import  UserRoles  from "../domain/UserRole.js";

class SellerController {
  async getSellerProfile(req, res) {
    try {
      const profile = await req.seller;
      console.log("Profile",profile);
      const token = req.headers.authorization?.split(" ")[1];
      const seller = await sellerService.getSellerProfile(token);
      return res.status(200).json(seller);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async createSeller(req, res) {
    try {
      await sellerService.createSeller(req.body);
      return res.status(201).json({ message: "Seller Created Successfully" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllSeller(req, res) {
    try {
      const status = req.query.status;
      const sellers = await sellerService.getAllSeller(status);
      return res.status(200).json(sellers);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async updateSeller(req, res) {
    try {
      const seller = await sellerService.updateSeller(req.seller, req.body);
      return res.status(200).json(seller);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async deleteSeller(req, res) {
    try {
      await sellerService.deleteSeller(req.params.id);
      return res.status(200).json({ message: "Seller Deleted Successfully" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async updateSellerAccountStatus(req, res) {
    try {
      const updatedSeller = await sellerService.updateSellerStatus(
        req.params.id,
        req.params.status
      );
      return res.status(200).json(updatedSeller);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async verifyLoginOtp(req, res) {
    try {
      const { otp, email } = req.body;

      const seller = await sellerService.getSellerByEmail(email);
      const codeDoc = await VerificationCode.findOne({ email });

      if (!codeDoc || codeDoc.otp !== otp) {
        throw new Error("Invalid OTP");
      }

      const token = jwtProvider.createJwt({ email });

      return res.status(200).json({
        message: "Login Success",
        jwt: token,
        role: UserRoles.SELLER,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new SellerController();
