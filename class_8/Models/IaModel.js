const mongoose=require("mongoose")

const IaSchema=mongoose.Schema({
    name:String,
    age:Number,
    salary:Number
})

const IA=mongoose.model("ia",IaSchema)

module.export={IA}