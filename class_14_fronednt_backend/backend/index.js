
const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {userModel} = require("./models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const { authentication } = require("./middlewares/authentication");
const { todoModel } = require("./models/TodoModel");
require("dotenv").config()

const app = express();

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/done",(req,res)=>{
    res.send("done file")
})


app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body

    const isUser = await userModel.findOne({email})
    if(isUser){
        res.send({"msg" : "User already exists, try logging in"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send("Something went wrong, please try again later")
        }
        const new_user = new userModel({
            name,
            email,
            password : hash
        })
        try{
            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            res.send({"msg" : "Something went wrong, please try again"})
        }
    });
}
})

app.post("/create",authentication, async (req, res) => {
    const {taskname, status, tag} = req.body
    const new_user = new todoModel({
                    taskname,
                    status,
                    tag
                })

                         try{
                                await new_user.save()
                                res.send({"msg" : "todo added up successfull"})
                            }
                            catch(err){
                                res.send({"msg" : "Something went wrong, please try again"})
                            }
 
})

app.patch("/update",authentication,async(req,res)=>{
    const {user_id,newtaskname} = req.body
    const user =await  todoModel.findOneAndUpdate({_id : user_id},{taskname:newtaskname});
    res.send("update the data successfull")
})

app.delete("/Delete",authentication,async(req,res)=>{
    const {user_id}=req.body;
    const user=await todoModel.findOneAndDelete({_id:user_id});
    res.send("deleted the task ")
})

// It will Give all the Todos Value
app.get("/todos", authentication, async (req, res) => {
    const {user_id} = req.body
    const user =await todoModel.find();
    res.send({user})
})

// It will Give only the Pending status
app.get("/todos/notdone", authentication, async (req, res) => {
    const {user_id} = req.body
    const user =await  todoModel.find({status:notdone}).pretty();
    res.send({user})
})

// It will give only the colplete status data
app.get("/todos/done", authentication, async (req, res) => {
    const {user_id} = req.body
    const user =await  todoModel.find({status:done}).pretty();
    res.send({user})
})


app.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    const hashed_password = user.password;
    const user_id = user._id;
    console.log(user)
    console.log(user_id)
    bcrypt.compare(password, hashed_password, function(err, result) {
          if(err){
            res.send({"msg" : "Something went wrong, try again later"})
          }
          if(result){
            const token = jwt.sign({user_id}, process.env.SECRET_KEY);  
            res.send({message : "Login successfull", token})
          }
          else{
            res.send({"msg" : "Login failed"})
          }
    });
})



const PORT=process.env.PORT||8001;

app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log(`Listening on PORT ${PORT}`)
})
