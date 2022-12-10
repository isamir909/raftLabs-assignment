
const { Router } = require("express")
const express=require("express")
const route=express.Router()
const bookController=require("../controller/bookController")
 

// test APi
route.get("/test",(req,res)=>{
  res.send({"test":"Hello"})
})

// Print out all books and magazines
route.get("/books-magazines",bookController.getBookAndMagazine)

route.post("/book",bookController.createBook)
route.post("/magazine",bookController.createMagazine)



module.exports=route