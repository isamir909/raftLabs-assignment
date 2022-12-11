const express=require("express")
const route=express.Router()
const bookController=require("../controller/bookController")
const magazineController=require("../controller/magazineController")
const adminController=require("../controller/adminController")
const {authenticate}=require("../middleware/authentication")

// test APi
route.get("/test",(req,res)=>{res.send({"test":"Hello"})})


// =================================================Required APIs========================================================================//
// Get books and magazines (it will receive different queries)
route.get("/books-magazines",bookController.getBookAndMagazine)




// =================================================Extra APIs========================================================================//

route.post("/login",adminController.login)
route.post("/register",adminController.createAdmin)

route.post("/:userId/magazine",authenticate,magazineController.createMagazine)
route.post("/:userId/book",authenticate,bookController.createBook)

module.exports=route