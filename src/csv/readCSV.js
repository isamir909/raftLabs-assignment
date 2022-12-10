const fs = require("fs");
const { parse } = require("csv-parse");
// give path of the CSV file
const inputFile = "./magazines.csv";
const mongodb = require("mongodb");
const uri ="mongodb+srv://samirlohiya909:Lohiya123@samirlohiya.nszppy8.mongodb.net/raftLabs?retryWrites=true&w=majority";

// Inserting CSV data into Database
const client = new mongodb.MongoClient(uri);
async function run(docs) {
  try {
    await client.connect();
    const database = client.db("raftLabs");
    const collection = database.collection("magazines");
    const options = { ordered: true };
    const result = await collection.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  } 
}
let arrayOfJson = [];
let parser = parse({ delimiter: ";" }, function (err, data) {
  data.forEach(function (line) {
    let csvTitles = {
      title: line[0],
      isbn: line[1],
      authors: line[2],
      publishedAt: line[3]
    };
    arrayOfJson.push(JSON.stringify(csvTitles));
  });
});

// Reading CSV data
fs.createReadStream(inputFile, "utf-8")
  .pipe(parser)
  .on("end", function () {
    const docs = cleanInputData(arrayOfJson, "authors");
    run(docs).catch(console.dir);
  });


// To Clean(remove null) CSV data, field will be the key that contains null
function cleanInputData(arr, field) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = JSON.parse(arr[i + 1]);
    if(field){arr[i][field] = arr[i][field].slice(5)
    }
  }
  arr.pop();
  return arr;
}
module.exports={client}
