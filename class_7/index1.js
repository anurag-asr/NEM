const express=require("express")

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("get request successfull")
})

app.listen(8000,(req,res)=>{
    console.log("litening on port 8000")
})