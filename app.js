//express js
 const express = require('express');
 const app = express();
 app.get('',(req,resp)=>{
   
    resp.send(`<h2> hello this is home page</h2><a href="/about">Go to about page</a>`);
 })
 app.get('/about',(req,resp)=>{
    resp.send(`
         <input type="text" placeholder="username"value=" ${req.query.name}" /><br>
         <button>Click me </button><br>
         <a href="/">Go To Home Page</a>

        `)
 });
 app.get('/help',(req,resp)=>{
    resp.send([
        {
        name:'moheed',
        class:'bsit',
        email:'moheeddar324@gmail.com'
    },
    {
        name:'saad',
        class:'bscs',
        email:'saad324@gmail.com'
    }
]);
});
 app.listen(5000)