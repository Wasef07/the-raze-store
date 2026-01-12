import mongoose from "mongoose";

const verificationCodeSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: () => Date.now() + 5 * 60 * 1000, 
    },
  },
  { timestamps: true }
);

verificationCodeSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

const VerificationCode = mongoose.model(
  "VerificationCode",
  verificationCodeSchema
);

export default VerificationCode;
