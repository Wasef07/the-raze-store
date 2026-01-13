import mongoose from "mongoose";
import UserRoles from "../domain/UserRole.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    mobile: {
      type: String,
    },
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    role: {
      type: String,
      enum: [UserRoles.CUSTOMER, UserRoles.ADMIN],
      default: UserRoles.CUSTOMER,
    },
    accountStatus: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "DELETED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
