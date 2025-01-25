const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json())
//post api mongoose
app.post("/create",async (req,resp)=>{
    let Data = new Product(req.body)
    let result = await Data.save();
    console.log(result)
    resp.send(result);
});
//get api mongoose
app.get ("/listen", async(req,resp)=>{
    let Data = await Product.find();
    resp.send(Data);
})
//delete api mongoose
app.delete ("/delete/:_id", async(req,resp)=>{
    let Data =await Product.deleteOne(req.params)
    resp.send("done");
    console.log(Data)
})
//update api mongoose
app.put ("/update/:_id", async(req,resp)=>{
    let Data =await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    resp.send("done");
    console.log(Data);
})



app.listen(5000);