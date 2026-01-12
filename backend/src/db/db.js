import mongoose  from "mongoose"
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO_URI

const connectDB=async()=>{
    try{
            const conn = await mongoose.connect(url);
            console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
             console.log(`MongoDB Error: ${error}`);
    }
}
export default connectDB;
