import mongoose from "mongoose";
export const  connectDB =async()=>{
    try {
        let res = await mongoose.connect(process.env.MONGODB_URI) ;
        if(res) return console.log("mongooDB connected");
    } 
    catch (error) {
        console.log("error whihing connected");
        console.log(error)
        }
 }