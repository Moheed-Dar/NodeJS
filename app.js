const express = require("express");
const app = express();
const reqFilter=require('./middle.js')
// app.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("<h1>welcome to home page</h1>");
});
app.get("/user", reqFilter, (req, resp) => {
  resp.send("<h2>welcome to user page</h2>");
});
app.get("/about", reqFilter, (req, resp) => {
  resp.send("<h2>welcome to about page</h2>");
});
app.listen(5000);
