const express=require("express");//here express is func 
const fs=require("fs");
const { parse } = require("path");

const app=express();//initial funct

app.use(express.json());//Middleware is used to handle JSON


app.get("/products",(req,res)=>{
    // how to extract for query
    // const price=req.query.price;
    // console.log(price)

    // Read the file
    // const file = fs.readFileSync("./db.json",{encoding:"utf-8"})
    // const parsedfile=JSON.parse(file)  
    // const products=parsedfile.products
    // console.log(products)
//    here the data is stringify with send automatically
//    so we don't need to stringify again
    res.send("get")
})


app.get("/products/:id",(req,res)=>{
    const params=req.params.id 
    console.log(params)
})


app.post("/addproducts",(req,res)=>{
    // accessing the product the client is sending
    const products=JSON.stringify(req.body);
   
    //2. read the file
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file)

    parsedfile.products.push(req.body)
    // console.log(parsedfile.products)

    fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
    res.send("thanks for post request")
})

// PUT_REQUEST
app.put("/putrequest",(req,res)=>{
    
    const {id}=req.body
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file);

     
    parsedfile.products.map((elem,index)=>{
      if(elem.id==id){
        parsedfile.products[index]=req.body;
        fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
      }
    })
    res.send("thanks for put request")
})

// DELETE_REQUET
app.delete("/delete_request",(req,res)=>{
    const {id}=req.body
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file);
    //  console.log(parsedfile)
   const filterd_data = parsedfile.products.filter((elem,index)=>elem.id!=id)
   fs.writeFileSync("./db.json",JSON.stringify(filterd_data),{encoding:"utf-8"})
   
        // if(elem.id==id){
        //   parsedfile.products[index]=req.body;
        //   fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
        // }
    
    //   console.log(filterd_data)
    res.send("thanks for delete Request")
})

// app.post("/uploaddata",(req,res)=>{
//     console.log(req.body)
//     fs.appendFileSync("./data.txt",JSON.stringify(req.body),{encoding:"utf-8"})
//     res.send("thanks")
// })

// app.post("/addproducts",(req,res)=>{
//     // 1. accessing the product the client is sending
//     // req.body
//     // 2 read the file

//     const file=fs.readFileSync("./db.json",{encoding:"utf-8"})

// })


app.listen(8080,()=>{
    console.log("listeningdsdsadsaaa on port 8080")
})




// CRUD API using Express;





// rember 2 things for express only(methods + routes)
