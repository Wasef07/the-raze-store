import mongoose from "mongoose";
import PaymentStatus from "../domain/PaymentStatus.js";

const paymentOrderSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:Object.values(PaymentStatus),
        default:PaymentStatus.PENDING,
    },
    paymentMethod:{
        type:String,
        default:"RAZORPAY",
    },
    paymentLinkId:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
    }],
},{ timestamps: true })

const PaymentOrder = mongoose.model("PaymentOrder",paymentOrderSchema);

export default PaymentOrder;
