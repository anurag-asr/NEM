const mongoose=require("mongoose");

const BMISchema=new mongoose.Schema({
    BMI:{type:Number,required:true},
    height :{type:String,required:true},
    weight:{type:String,required:true},
    user_id:{type:String,required:true}
    
},{
    timestamps:true
})


const BMIModel=mongoose.model("BMI",BMISchema)

module.exports={
    BMIModel
}