const {Router}=require("express");
const { Student } = require("../Models/StudentModel");

const studentRouter=Router();

studentRouter.get("/",async (req,res)=>{
    const results = await Student.find();
    console.log(results)
    res.send(results)
})

studentRouter.get("/:studentname",async (req,res)=>{
    
    const results=await Student.find({name:req.params.studentname});
    res.send()
})

studentRouter.post("/data",async(req,res)=>{
})

module.exports={studentRouter};