import mongoose from "mongoose";
import HomeCategorySection from "../domain/HomeCategorySection.js";
const homeCategorySchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    section:{
        type:String,
        enum:Object.values(HomeCategorySection),
        required:true
    }
},{timestamps:true});

homeCategorySchema.index({ section: 1 });


const HomeCategory = mongoose.model("HomeCategory",homeCategorySchema);
export default HomeCategory;