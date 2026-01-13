import Cart from "../model/cart.js";
import User from "../model/User.js";
import VerificationCode from "../model/VerificationCode.js";
import generateOTP from "../util/generateOtp.js";
import jwtProvider from "../util/jwtProvider.js";
import sendVerificationEmail from "../util/sendEmail.js";
import SellerService from "./SellerService.js";
import UserRoles from "../domain/UserRole.js";

class AuthService {

  // SEND OTP (login/signup)
  async sendLoginOTP(email) {
    await VerificationCode.deleteOne({ email });

    const otp = generateOTP();

    await VerificationCode.create({ email, otp });

    await sendVerificationEmail(
      email,
      "The Raze Store Login / Signup OTP",
      `<p>Your OTP is <b>${otp}</b>. Valid for 5 minutes.</p>`
    );
  }

  // SIGNUP
  async createUser(email, name, otp) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const verificationCode = await VerificationCode.findOne({ email });
    if (!verificationCode || verificationCode.otp != otp) {
      throw new Error("Invalid or expired OTP");
    }

    const user = await User.create({
      email,
      name,
      role: UserRoles.CUSTOMER,
    });

    await Cart.create({ user: user._id });

    await VerificationCode.deleteOne({ email });

    const token = jwtProvider.createJwt({
      email: user.email,
      role: user.role,
    });

    return {
      message: "User registered successfully",
      jwt: token,
      role: user.role,
    };
  }

  // SIGNIN
  async signin(email, otp) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const verificationCode = await VerificationCode.findOne({ email });
    if (!verificationCode || verificationCode.otp !== otp) {
      throw new Error("Invalid or expired OTP");
    }

    await VerificationCode.deleteOne({ email });

    const token = jwtProvider.createJwt({
      email: user.email,
      role: user.role,
    });

    return {
      message: "Login success",
      jwt: token,
      role: user.role,
    };
  }
}

export default new AuthService();
