const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:String
})


const userModel=mongoose.model("user",UserSchema)

module.exports={
    userModel
}