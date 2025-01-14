const dbConnect = require('./mongodb')
//method 1
// dbConnect().then((resp)=>{
//   resp.find({Sec:'B'}).toArray().then((data)=>{
//     console.warn(data)
//   })
// })
// console.warn(dbConnect())

//method 2
const main = async()=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
}
main();