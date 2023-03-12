const express=require("express");
const {connection,StudentModel}=require("./db")

const apple=express();

apple.use(express.json());
apple.use(express.text());

apple.get("/getrequest",(req,res)=>{
    res.send("index page")
})

apple.get("/about1", (req, res) => {
    res.send("Welcome to About")
})

apple.get("/students", async (req, res) => {
    const results = await StudentModel.find()
    console.log(results)
    res.send(results)
})

apple.post("/addstudent", async (req, res) => {
    const data = req.body;
    // const student = StudentModel(data);
    // console.log(student)
    // await student.save();
    // console.log(data)
    res.send(data);
})

apple.listen(5001,async(req,res)=>{
    try{
        await connection//it will continuously 
        console.log("Connected to DB Successfully")
    }
    catch{
        console.log("Error connecting to db")
           console.log(err)
    }
    console.log("litening on port 5001 and thankyou")
})




// Thing that need to install from DB.js
// const mongoose=require("mongoose");
// const connection=mongoose.connect("mongssoabsa./../");

// const StudentModelSchema={
//     name:String,
//     age:Number
// }

// const Student1Model=mongoose.model("student1",StudentModelSchema);

// module.exports={
//     Student1Model,connection
// }

