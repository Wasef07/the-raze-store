import mongoose from "mongoose";
const dealSchema = new mongoose.Schema({
    discount: {
        type: Number,
        required: true,
        min: 1,
        max: 90
    },
    homeCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HomeCategory",
        required: true
    }
}, { timestamps: true });

dealSchema.index({ homeCategory: 1 }, { unique: true });

const Deal = mongoose.model("Deal", dealSchema);
export default Deal;
