import Seller from "../model/Seller.js";
import VerificationCode from "../model/VerificationCode.js";
import generateOTP from "../util/generateOtp.js";
import sendVerificationEmail from "../util/sendEmail.js";
import SellerService from "./SellerService.js";

class AuthService {
  async sendLoginOTP(email) {
    const SIGNIN_PREFIX = "signin_";

    if (email.startsWith(SIGNIN_PREFIX)) {
      email = email.substring(SIGNIN_PREFIX.length);
      const seller = await SellerService.getSellerByEmail(email);
      if (!seller) {
        throw new Error("User not found");
      }
    }

    await VerificationCode.deleteOne({ email });

    const otp = generateOTP();


    await VerificationCode.create({ email, otp });

    const subject = "The Raze Store Login / Signup OTP";
    const body = `
      <p>Your OTP is <b>${otp}</b>.</p>
      <p>This OTP is valid for 5 minutes.</p>
    `;

    await sendVerificationEmail(email, subject, body);
  }
}

export default new AuthService();
