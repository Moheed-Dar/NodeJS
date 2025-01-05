const express = require('express');
const app = express();
const reqFilter = (req,resp,next)=>{
    console.log('reqFilter');
    next();
}
app.use(reqFilter)
 app.get('/',(req,resp)=>{
    resp.send('<h1>welcome to home page</h1>')
 })
 app.get ('/user',(req,resp)=>{
    resp.send('<h2>welcome to user page</h2>')
 })
app.listen(5000)