const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  email:{type:String,required:true},
  title: {type:String,required:true},
  note: {type:String,required:true},
  tag: {type:String,required:true},
});

const NoteModel = mongoose.model("note", NoteSchema);

module.exports = { NoteModel };
