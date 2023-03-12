const express = require("express")
const jwt = require("jsonwebtoken")
const {connection} = require("./config/db")
const bcrypt = require('bcrypt');
const {UserModel} = require("./models/user.model")

const app = express()


app.use(express.json())


app.get("/", (req, res) => {
    res.send("Home page")
})

// Authentication Middleware
const authentication = (req, res, next) => {
    const token = req.headers.authorization
    // res.send("authentication")
    console.log(token)
    try{
        var decoded = jwt.verify(token, 'abcd12345');//will provide email and secret_code which will give during the login
        req.body.email = decoded.email
        next()
    }
    catch(err){
       res.send("Please login again")
    }
}
  

// Autherization Middleware
const authorisation = (permittedrole) => {
    // Closure => bcz here we call callback inside the main authorisation function
    return async (req, res, next) => 
    {
    const email = req.body.email
    const user = await UserModel.findOne({email : email})
    const role = user.role;
 
        if(permittedrole.includes(role)){
            // Here we used include bcs it will have the differen 2 value i.e; student,customer,seller,admin
            next()
        }
        else{
            res.send("Not authorised")
        }
    }
}

app.get("/dashboard", authentication, (req, res) => {
  res.send("Here is your dashboard data")
})

app.get("/reports", (req, res) => {
    res.send("Some important reports")
})

app.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    bcrypt.hash(password, 5, async function(err, hashed_password) {
        if(err){
            res.send("Something went wrong, please signup later")
        }
        const new_user = new UserModel({
            email : email,
            password : hashed_password
        })
        await new_user.save()
        res.send("Sign up successfull")
    });
})
//


app.post("/login", async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email})
        const hashed_password = user.password
        bcrypt.compare(password, hashed_password, function(err, result) {
            if(result){
                const token = jwt.sign({email : email}, 'abcd12345')
                res.send({"msg" : "Login successfull", "token" : token})
            }
            else{
                res.send("Login failed")
            }
        });
        
})

//no authentication, no authorisation
app.get("/products", (req, res) => {
    res.send("here are you products")
})

//authentication, no authorisation
// Here we verify the token with the help custom middleware but before we call it from headers and verify it 
app.get("/products/cart", authentication, (req, res) => {
    res.send(`Here are the products in your cart.`) 
})

//Authentication, Authorisation (seller -> permission for this route)
app.post("/products/create", authentication, authorisation(["seller"]), async (req, res) => {
    res.send("Product created")      
})

//Authorisation (customer --> permission for this route)
app.post("/productsFeedback", authentication, authorisation(["customer"]), async (req, res) => {
    res.send("Product Feedback taken")
})


app.post("/assignments/edit", authentication, authorisation(["ia", "instructor"]), (req, res) => {
    res.send("edited")
})
app.listen(8004, async () => {
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("listening on PORT 8004")
})





