
const http=require("http")
const fs=require("fs")
const { request } = require("https")

const server=http.createServer((req,res)=>{

    // assignment
    if(req.url==="/"){
        try{fs.readdir("Assignment",(err,files)=>{
          if(err){console.log(err)}
          else{
            console.log(files)
           res.end(JSON.stringify(files))
          }
        })}
        catch{
            console.log("error in file")
        }
    }
    
    if(req.method==="GET"){
        if(req.url==="/posts"){
            console.log(request.method)
            const posts=fs.readFileSync("./posts.json",{encoding:'utf-8'})

            res.setHeader("conten-type","application/json")
            
            return res.end(JSON.stringify(posts))
        }
        else if(req.url==="/todos")
        {
            return res.end("mine Todos are here")
        }
        // STEARMING the data 
        else if(req.url==="/posts2"){
         const readStream=fs.createReadStream("./posts.json",{encoding:"utf-8"})
         readStream.pipe(res)
        }

        else{res.end("Invalid route")}
    }


    else if(req.method==="POST")
    {
        if(req.url="/ulploaddata"){
        let str="";
        req.on("data",function(packet){
            str+=packet
        })
        req.on("end",()=>{
            fs.writeFileSync("./dummmy.txt",str,{
                encoding:"utf-8"
            })
        })

        }
        res.end()
    }



    // How To Make POST REQUEST USINH HTTP;


    // res.write("hello");
    // res.write("world");
    // res.end("!")

    // if(req.url==="/text"){
    //     return res.end("hello my cute friend")
    // }
   
    // if(req.url==="/text"){ 
    //     try{const data=fs.readFileSync("./data.txt",{encoding:"utf-8"} )
    //     res.end(data)}
    //     catch{res.end("somethimg went worng")}
    // }

    // if(req.url==="/post")
    // {          
//   let obj1={
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et"
//   }
// we need to use JSON.stringigy for showing the data in object to the browser
//   res.setHeader("content-type","text/plain")
//   res.setHeader("content-type","application/json")
//   res.write(JSON.stringify(obj1))}
//   res.end("[1,2,3,4]")

//     else if(req.url==="/comments")
//     {
        
//         let obj={
//                 "postId": 1,
//                 "id": 2,
//                 "name": "quo vero reiciendis velit similique earum",
//                 "email": "Jayne_Kuhic@sydney.com",
//                 "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//               }
//        res.end(JSON.stringify(obj))
//     }

//     else{
//         res.end("better Luck neXt Time ")
//     }
  
})
   


server.listen(5000,()=>{
    console.log("Listening on port localHost:5000")
})

