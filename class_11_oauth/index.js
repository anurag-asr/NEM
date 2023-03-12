const express=require("express");
const axios = require("axios")
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

const CLIENT_ID="4d10f78e3ffcab771e51";
const SECRETE_CODE="c9a6d7a8f8c3ae30765330a2194dded31614cd88"

//after getting the authorisation from github it will callback this route
app.get("/github/callback",async (req,res)=>{
   
    const code =req.query.code;//code is tranfer in query by github oauth

    const accessToken=await axios.post(`https://github.com/login/oauth/access_token`,null,{
        params:{
            client_id:CLIENT_ID,
            client_secret:SECRETE_CODE,
            code:code
        },headers:{
            accept:"application/json"//beacause we want from github to send data in json format
            //and accept is used bcs it is the get request else for post can use {Content-type:application/json} means we sending the data in json format
        },
    })
    .catch(console.error);
    
    console.log("BMW",accessToken)
    
    //Here userdata will fetch the information of the user that github have like username and emial,repositeries,followers,following and many more things
    
    const userdata=await axios.get("https://api.github.com/user",{
        headers:{
            Authorization:`Bearer ${accessToken.data.access_token}`
        },
    })
    .catch(console.error)
    
    console.log("Github user Data",userdata)
    res.send("Sign in with github successfully")
})

app.listen(8080,()=>{
    console.log("Server started on port 8080")
})