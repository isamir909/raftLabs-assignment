const express=require("express")
const route=express.Router()
const csvController=require("../../csv/readCSV")

route.get("/test",(req,res)=>{
  res.send({"test":"Hello"})
})


route.post("/insertMany",csvController.insertMany)







module.exports=route