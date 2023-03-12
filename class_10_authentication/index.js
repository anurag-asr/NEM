const express=require("express");
const { connection } = require("./config/db");
const { Users } = require("./routes/user.routes");

const app=express();

app.use(express.json());

app.use("/", Users);


app.listen(8004,async(req,res)=>{
    try{
        await connection;
        console.log("connection is successfull")
    }
    catch(err){
      console.log("something is wrong")
      console.log(err)
    }
    console.log("listening in port 8004")
})