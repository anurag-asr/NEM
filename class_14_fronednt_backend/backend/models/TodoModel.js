const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    taskname:{type:String,require:true},
    status:{type:String,require:true},
    tag:String
})


const todoModel=mongoose.model("todo",TodoSchema)

module.exports={
    todoModel
}