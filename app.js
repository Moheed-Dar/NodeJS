//express js
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
app.set('view engine','ejs');
//thats are statically pages
app.get ('',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get ('/profile',(_,resp)=>{
    const user={
        name:'moheed dar',
        email:'moheeddar324@gmail.com',
        contact:'instagram'
    }
   resp.render('profile',{user});
})
app.get ('/index',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get ('/helpmeplz',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})
app.get ('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/pageerror.html`)
})
//this is dynamically pages

app.listen(5000);
