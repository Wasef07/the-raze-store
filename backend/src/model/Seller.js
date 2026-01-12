import mongoose from "mongoose";
import UserRoles from "../domain/UserRole.js";
import AccountStatus from "../domain/AccountStatus.js";

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },

    businessDetails: {
      businessName: String,
      businessEmail: String,
      businessMobile: String,
      businessAddress: String,
    },

    bankDetails: {
      accountNumber: String,
      accountHolderName: String,
      bankName: String,
      ifscCode: String,
    },

    pickupAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },

    GSTIN: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: Object.values(UserRoles),
      default: UserRoles.SELLER,
    },

    accountStatus: {
      type: String,
      enum: Object.values(AccountStatus),
      default: AccountStatus.PENDING_VERIFICATION,
    },
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);
export default Seller;
