import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    name: String,
    locality: String,
    pincode: String,
    state: String,
    address: String,
    mobile: String,
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);
export default Address;
