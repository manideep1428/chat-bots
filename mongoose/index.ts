import mongoose from "mongoose";

export async function connectDB(){
     mongoose.connect(process.env.MONGODB_URI || "")
     .then(r=>console.log("Connected to MongoDB"))
     .catch(e=>console.log("Error Ocuured in DB"+ e))
}