const express=require("express");
// For using the env file  have to install reuire("dotenv")
const {connection}=require("./config/db");
const { Student} = require("./Models/StudentModel");
const { IA } = require("./Models/IaModel");
const { studentRouter } = require("./routes/student.routes");
const { iaRouter } = require("./routes/ia.routes");

const app=express();

app.use(express.json());

app.get("/req",async(req,res)=>{
    let x= await Student.find()
    console.log(x)
})

app.use("/student",studentRouter)

app.use("/ia",iaRouter)

app.get("/get",(req,res)=>{
    res.send("suucccws ometjjdb")
})

app.post("/addstudent",(req,res)=>{
    const data=req.body;
    const student=Student.insertMany([data])
    res.send("post request successfull")
})

app.listen(8008,async(req,res)=>{
    try{
        await connection
        // res.send("connection was successfull")
        console.log("successfull")
    } 

    catch(err){
        console.log("something is wroong")
        console.log(err)
    }
    console.log("listening on port 8008");

})

// var classId="4d10f78e3ffcab771e51";
// var class_secret="c9a6d7a8f8c3ae30765330a2194dded31614cd88"