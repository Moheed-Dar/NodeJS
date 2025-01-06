const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function getData() {
  let result = await client.connect();
  let db = result.db("items");
  let collection = db.collection("items");
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();
// second database to fatch data
async function doData()
{
  let result = await client.connect();
  let db = result.db('Shop');
  let collection = db.collection('items');
  let response1 = await collection.find({}).toArray();
  console.log(response1)
}
doData();