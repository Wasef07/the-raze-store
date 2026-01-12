import AuthService from "../service/AuthService.js";

class AuthController {
  async sendLoginOtp(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      await AuthService.sendLoginOTP(email);

      return res.status(200).json({
        message: "OTP sent successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new AuthController();
