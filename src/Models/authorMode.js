const mongoose=require("mongoose")


const authorSchema=new mongoose.Schema({

  email:{type:String,required:true,trim:true,unique:true},
  firstname:{type:String,required:true,trim:true},
  lastname:{type:String,required:true,trim:true},

},{timestamps:true});


module.exports=mongoose.model("author",authorSchema);