const express = require('express');
const app = express();
const reqFilter = (req,resp,next)=>{
    if (!req.query.age){
        resp.send("please provide age")
    }else if(req.query.age<18){
        resp.send("your age is less than 18")
    }
    else{
        next();
    }
    
}
app.use(reqFilter)
 app.get('/',(req,resp)=>{
    resp.send('<h1>welcome to home page</h1>')
 })
 app.get ('/user',(req,resp)=>{
    resp.send('<h2>welcome to user page</h2>')
 })
app.listen(5000)