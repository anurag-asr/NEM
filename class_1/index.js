// const {sum,mul,div,sub,sine,cose,tane,random} =require("./test")
// sum(2,3)
// mul(3,4)
// div(6,4)
// sub(6,2)
// sine(1)
// cose(0)
// tane(45)
// random(1)




// const os=require("os")
// console.log(os.cpus()[0]);


// const isEven=require("is-even")
// console.log(isEven(2))


//  ASYNCRONOUS RUNNING
// const fs=require("fs")
// fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
//     console.log(data)
// })
// console.log("last line")
// here you can see due to asynchronus function it is printing after some time {we will mostly prefer asynchronous function just for showin here i am doing for synchronus function}


// Here sync is used so it is indicate it will run Synchronously
// const fs=require("fs")
// const result =fs.readFileSync("./text.txt",{encoding:"utf-8"})
// console.log(result)
// console.log("last line");


//it will give you all the function inside object name fs={}
// const fs = require('fs');  
// console.log(fs)
// WRITTEN READ RENAME REMOVE
// fs.writeFileSync("./written.txt","new written file",{encoding:"utf8"})
// fs.appendFile("./written.txt","nikki best of luck",(err)=>{console.log("error")})
// fs.rename("written.txt","newwriiten.txt",(err)=>{console.log(err)})
//  fs.rm("./written.txt",{recursive:true},(err)=>{console.log(err)})
// fs.rename("./text.txt","./newfile.txt",(err)=>{
//     if(err) throw err;
//     console.log("rename completed !")
// })

// // OR YOU CAN EXTRAT THE DATA AS LIKE THIS
//  const {appendFile}=require("fs")
// appendFile("written.txt","new writtem file",(err)=>{console.log(err)})
 


// const { randomFillSync } = require('node:crypto');
// const { Buffer } = require('node:buffer');

// const buf = Buffer.alloc(10);
// console.log(randomFillSync(buf).toString('hex'));


// LIST ALL the files inside directories
// const fs = require('fs');
// fs.readdir("node_modules", (err, files) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("\nCurrent directory filenames:");
//     files.forEach(file => {
//       console.log(file);
//     })
//   }
// })
 