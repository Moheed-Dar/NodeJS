const http = require("http");
const data =require('./data')
http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);

const modi =require('./modi')
http.createServer((req,resp)=>{
  resp.writeHead(200,{"content-type":"application/json"});
  resp.write(JSON.stringify(modi));
  resp.end();

}).listen(5001);