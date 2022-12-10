const { Parser } = require('json2csv');
const fs = require('fs');
const mongodb = require("mongodb");
const uri ="mongodb+srv://samirlohiya909:Lohiya123@samirlohiya.nszppy8.mongodb.net/raftLabs?retryWrites=true&w=majority";

const client = new mongodb.MongoClient(uri);
async function convertToCSV (){
  try {

  await  client.connect();
  const database = client.db("raftLabs");
  const collection = database.collection("magazines");
  const options = {
    sort: { title: 1 },
    projection: { _id: 0,__v:0,updatedAt:0,createdAt:0 },
  };
  const result = await collection.find({},options).toArray();
 
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(result);
  
  fs.writeFile("books.csv",csv,"utf8",(error)=>{
      console.log("file created ");
  })
  } finally {
    await client.close();
  } 

}

convertToCSV();





