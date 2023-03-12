const express=require("express");
const app=express();
const path=require("path");
const staticPath=path.join(__dirname)

app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("hey how are u")
})

app.listen(8000,()=>{
    console.log("Setup successfull")
})