const express = require ('express');
const dbConnect = require('./mongodb');
const dbConnect1 = require ('./mongodb');
const app = express();
app.use(express.json());

app.get('/',async(req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post ('/', async (req,resp)=>{
    let data = await dbConnect1();
    let result =await data.insertOne(req.body);
    resp.send(result)
})

app.put('/:name',async (req,resp)=>{
    let data = await dbConnect1();
    let result = await data.updateOne(
        {"name":req.params.name},
        {$set:req.body}
    )
    resp.send({result:"updated"})
})
app.listen(4000);