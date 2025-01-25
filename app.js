const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json())
app.post("/create",async (req,resp)=>{
    let Data = new Product(req.body)
    let result = await Data.save();
    console.log(result)
    resp.send(result);
});
app.listen(5000);