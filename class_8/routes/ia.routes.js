const {Router}=require("express");

const iaRouter=Router();

iaRouter.get("/",(req,res)=>{
    const data=req.body;
    const ias=IA.insertMany([data])
    res.send("post ia successfull")
})

module.exports={iaRouter};


