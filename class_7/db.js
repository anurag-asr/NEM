const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/new_user")

const studentSchema =  mongoose.Schema({
    name : String,
    age : Number,
    course : String,
})

const StudentModel = mongoose.model("student", studentSchema)


module.exports = {
    connection,
    StudentModel
}

