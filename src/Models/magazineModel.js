const mongoose=require("mongoose")


const magazineSchema=new mongoose.Schema({

  title:{type:String,required:true,trim:true},
  isbn:{type:String,required:true,trim:true,unique:true},
  authors:{type:String,required:true,trim:true},
  publishedAt:{type:Date,required:true}
},{timestamps:true});


module.exports=mongoose.model("magazine",magazineSchema);


