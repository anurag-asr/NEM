const mongoose=require("mongoose")

const StudentSchema=mongoose.Schema({
    email:String,
    password:String,
    username:String
});



const User=new mongoose.model("user",StudentSchema)

module.exports={User,userInfo}