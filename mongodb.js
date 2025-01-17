const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db("Shop");
  return db.collection("items");
}
async function dbConnect1() {
  let result = await client.connect();
  let db = result.db("Shop");
  return db.collection("emp");
}
module.exports = dbConnect;
module.exports = dbConnect1;

