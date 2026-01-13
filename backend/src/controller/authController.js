import AuthService from "../service/AuthService.js";

class AuthController {

  // SEND OTP
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

  // SIGNUP
  async createUser(req, res) {
    try {
      const { email, name, otp } = req.body;

      if (!email || !name || !otp) {
        return res.status(400).json({
          message: "Email, name and OTP are required",
        });
      }

      const response = await AuthService.createUser(email, name, otp);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  // SIGNIN
  async signin(req, res) {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        return res.status(400).json({
          message: "Email and OTP are required",
        });
      }

      const response = await AuthService.signin(email, otp);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new AuthController();