const express = require("express");
const app = express();
const reqFilter=require('./middle.js')
const route = express.Router();
// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("<h1>welcome to home page</h1>");
});
route.get("/user",  (req, resp) => {
  resp.send("<h2>welcome to user page</h2>");
});
 
route.get("/contact", (req, resp) => {
  resp.send("<h2>welcome to contact page</h2>");
});
// single middleware app.get
app.get("/detail", reqFilter, (req, resp) => {
  resp.send("<h2>welcome to contact page</h2>");
});
//
 app.use('/',route);
app.listen(5000);
