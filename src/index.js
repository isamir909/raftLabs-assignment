
const express=require("express")
const mongoose=require("mongoose")
const route=require("./route/route")
const app=express()
const bodyParser=require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://samirlohiya909:Lohiya123@samirlohiya.nszppy8.mongodb.net/raftLabs?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{
  console.log("MongoDB connected");
})
.catch((e)=>{
  console.log(e);
})

app.use("/",route)

app.listen((process.env.PORT||3001),()=>{
  console.log('Express app running on port ' + (process.env.PORT||3001))
})
