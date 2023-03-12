
const express=require("express")
const messagesRouter=express.Router();

messagesRouter.get("/",(req,res)=>{
    res.send("welcome messages");
})

messagesRouter.post("/add",(req,res)=>{

    res.send("welcome messages post request");
 
})

messagesRouter.delete("/delete",(req,res)=>{

    res.send("welcome messages delete request");

})

module.exports={messagesRouter}