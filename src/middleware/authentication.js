const jwt = require('jsonwebtoken');
const adminModel=require("../Models/adminModel")


const authenticate=async function(req,res,next){
  try {
      let userId=req.params.userId.trim()
      
      if(userId.length==0)return res.status(400).send({status:false, message: "please login" })
      let token=req.headers.authorization
      if(!token) return res.status(400).send({status:false,message:"Token is required, please login"});

      let user = await adminModel.findById(userId)
      if(!user) return res.status(404).send({status:false, message:"User Not Found"})
     
      let newToken = token.replace('Bearer ',"")
      
      //----------------------authorization---------------------------------------------
      let decodedToken = jwt.verify(newToken, "RaftLabs!@#$%")
      if (!decodedToken) return res.status(401).send({ status: false, msg: "Authentication failed" });

      const requestUser = req.params.userId
      const loginUser = decodedToken.id
      if(requestUser !== loginUser ) return res.status(403).send({status:false, message:"login User is not authorized"}) 
      next()
  } 
  catch (error) {
    if(error.message=="jwt expired") return res.status(401).send({status:false,msg:" Your token is expired "})
      return res.status(500).send({ status: false, msg: error.message })
  }
} 
module.exports={authenticate}
