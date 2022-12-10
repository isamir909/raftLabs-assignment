const mongoose=require("mongoose")


const bookSchema=new mongoose.Schema({

  title:{type:String,required:true,trim:true},
  isbn:{type:String,required:true,trim:true,unique:true},
  authors:{type:String,required:true,trim:true},
  description:{type:String,trim:true},

},{timestamps:true});


module.exports=mongoose.model("book",bookSchema);


