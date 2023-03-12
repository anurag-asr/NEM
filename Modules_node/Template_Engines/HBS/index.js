const express=require("express");

const app=express();

const path=require("path")

// to set the view engine//hbs/pug/ejs
app.set("view engine","hbs") 
// app.set("view engine","ejs");

app.get("/profile/:name",(req,res,next)=>{
    console.log(req.params.name) 
    res.render("index",{name:req.params.name})
})

app.get("/sendfile",(req,res)=>{
    let abs_path=path.join(__dirname,"/trial.html")
    console.log(abs_path)
    res.sendFile(abs_path)
})

//error page
app.get("*",(req,res)=>{
    res.send("response 404 errror")
    
})

app.post("/post",(req,res)=>{
    res.send("successfull post request")
})

app.listen(8000,()=>{
    console.log("PORT runs On 8000 SLOT")
})