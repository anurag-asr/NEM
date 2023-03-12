const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    email:{type:String,require:true},
    password:String
})


const userModel=mongoose.model("user",UserSchema)

module.exports={
    userModel
}