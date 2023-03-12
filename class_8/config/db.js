const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://127.0.0.1:27017/test");

module.exports=({
    connection
})

// const mongoose = require("mongoose")

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/test")
// const a=require("dotenv")
// a.config();
// const connection = mongoose.connect(process.env.PORT)

// const connection = mongoose.connect("mongodb+srv://anurag-asr:AnuragS%4017370@cluster0.hua0bin.mongodb.net/test")


// module.exports = {
//     connection
// }