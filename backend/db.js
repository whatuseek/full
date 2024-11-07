
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to MongoDB:",err);
    }
    finally{
        mongoose.connection.close();
    }
    
}
module.exports=connectDB;