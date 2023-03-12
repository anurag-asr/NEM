const express=require("express");
const fs=require("fs");
const dns = require('dns');
const app=express();

app.use(express.json());
const { parse } = require("path");

// Question 2
app.get("/products",(req,res)=>{
    const file = fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file)  
    const products=parsedfile.products
    res.send(products)
})

app.post("/product/create",(req,res)=>{
    const products=JSON.stringify(req.body);

    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file)
    // console.log(parsedfile)
    parsedfile.products.push(req.body)

    fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
    res.send("thanks for post request")
})


app.put("/product/:productId",(req,res)=>{
    const params=req.params.productId
    // console.log(params) 
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file);

    parsedfile.products.map((elem,index)=>{
      if(elem.id==params){
        parsedfile.products[index]=req.body;
      
        fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
      }
    })
    res.send("thanks for put request")
})

// PATCH
app.patch("/product/:productId",(req,res)=>{
    const params=req.params.productId
    // console.log(req.body.title) 
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file);

    parsedfile.products.map((elem,index)=>{
      if(elem.id==params){
        parsedfile.products[index]={
            "id":params,
            "title":req.body.title
        };
    
    fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
      }
    });

    res.send("thanks for patch request")
})


// DELETE_REQUET
app.delete("/product/:productId",(req,res)=>{
    const params=req.params.productId
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedfile=JSON.parse(file);
   const filterd_data = parsedfile.products.filter((elem,index)=>elem.id!=params)
   parsedfile.products=filterd_data
   console.log(parsedfile)
   fs.writeFileSync("./db.json",JSON.stringify(parsedfile),{encoding:"utf-8"})
    res.send("thanks for delete Request")
})

// Question 1
app.post("/getmeip",(req,res)=>{
    const options = {
        family: 6,
        hints: dns.ADDRCONFIG | dns.V4MAPPED,
    };
  
    dns.lookup('geeksforgeeks.org', options, (err, address, family) =>
    res.send(address) );
              
})
  


app.listen(8080,()=>{
    console.log("listeni on port 8080")
})
