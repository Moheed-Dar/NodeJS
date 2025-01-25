const express = require('express');
require('./config');
const Product = require('./product');

const app = express();

app.get ("/search/:key",async(req,resp)=>{
    let data = await Product.find(
        {
            $or:[
                {"Name":{$regex:req.params.key}},
                {"name":{$regex:req.params.key}},
                {"Category":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    );
    console.log(req.params.key);
    resp.send(data);
})


app.listen(5000);