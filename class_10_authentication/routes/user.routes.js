var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userModel } = require("../models/user.model");
const { NoteModel } = require("../models/note.model");
const { Router } = require("express");
const passport = require("../config/Google.oauth")

const Users = Router();

Users.post("/login",async(req,res)=>{
 const {email,password}=req.body;
 const result=await userModel.findOne({email})
 
const hashed_password=result.password

 bcrypt.compare(password, hashed_password, async function(err, result) {
    if(result){
        var token = jwt.sign({ email: email }, 'abcd123');
        
 res.send( {"msg":"login successfull","token":token})
    }
    else{
        res.send("please loging again")
    }
});

})



Users.get("/rest",(req,res)=>{
  res.send("rest request are worjing")
})


Users.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    bcrypt.hash(password, 5, async function(err, hash) {
      if(err){
        res.send("something went wrong please login afyer sometime ")
      }
      const new_user= new userModel({
        email:email,
        password:hash
    })
    
    await new_user.save()
    res.send("signup successfully")
    });
    
})




Users.post("/create",async (req, res) => {
    const token = req.headers.authorization
    console.log(token)
    try{
       
        var decoded = jwt.verify(token, 'abcd123');
        const {email,title, note, tag } = req.body
        const data = NoteModel({email,title, note, tag });
        await data.save();
        console.log(data);
        res.send("create your data  ..... ")

    } 
    catch(err){

    console.log(err)
    res.send("please login again")

    }
  });

Users.get("/dashboard",(req,res)=>{
    const token=req.headers.authorization
    try{
        var decoded = jwt.verify(token, 'abcd123');
        res.send("dashboard data ..... ")
    } 
    catch(err){
    console.log(err)
    res.send("please login again")
    }
    // res.send("get request on dashboard")
})


Users.patch("/update", async(req, res) => {
    const token = req.headers.authorization;

    jwt.verify(token, "abcd123", async function (err, decoded) {
        if (decoded.email && token) {
          const {newtitle} = req.body;
          await NoteModel.findOneAndUpdate(
            { email: decoded.email},
            { title: newtitle }
          );
          res.send("update the data");
        } else {
          res.send(err);
        }
      });
  });

  Users.delete("/delete", (req, res) => {
    const token = req.headers.authorization;
  
    jwt.verify(token, "abcd123", async function (err, decoded) {

      if (token) {
        const { title } = req.body;
        await NoteModel.findOneAndDelete({
          email: decoded.email
        });
        res.send("delete request");
      } else {
        res.send(err);
      }
    });
  });

  module.exports = { Users };