const express=require("express");
const { messagesRouter } = require("./routes/messages.routes");

const cors=require("cors");
var validator = require('validator')

const app = express();

// . This method is used to parse the incoming requests with JSON payloads based on body-parser
app.use(express.json());
// It parses the incoming request payloads into a string and is based on body-parser.
app.use(express.text());

// app.use(cors({
//     origin:"https://n9sbqv.csb.app"
// }));



// Middleware FUNCTION which has access to req Objecta and return Object and next
// Callback Function => The function which is passed as an argument to other functions
// Custom middleware-timeLogger,urlLogger,whatever;
// express has inbuilt middleware-express.json();


const TimeLogger=(req,res,next)=>{
    // console.log(`The method is ${req.method} and the url is ${req.url}`)
    // console.log("a")
    const start_time=new Date().getTime();
    next()//after the execution is done
    const end_Time=new Date().getTime();
    console.log(end_Time-start_time)
    // console.log("d");
    // console.log("w");
}

const char=(req,res,next)=>{
 console.log("m");
 next();
 console.log("y")
}

const urlLogger=(req,res,next)=>{
console.log("g");
next();
console.log("f")
}

app.use(TimeLogger)
app.use(char);
app.use(urlLogger)
// result=>{m,g,y,z,f,y}

// app.use(urlLogger)
// app.use(char);
// result={g,m,y,z,y,f}

app.use("/messages",messagesRouter)

app.get("/",(req,res)=>{
   
    res.send("welcome back");

})

app.get("/about",(req,res)=>{
    console.log(req.url)
    res.send("welcome to about page")
})

app.get("/contact",(req,res)=>{
    console.log(req.url)
    res.send("welcome to contact page")
})


app.listen(8080,()=>{
    console.log("Listenig on Port 8080")
})


//CORS=>CROSS ORIGIN RESOURCE SHARING
// cors policy=>doesn't allow cross origin request