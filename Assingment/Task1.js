const http = require("http");
const fs = require('fs');

const link = ['/home','/about','/contact'];

http.createServer((req,res)=>{
  res.setHeader("Content-Type","text/html");
    (req.url===link[0]) ?
    res.write("Home Page") :
    (req.url===link[1]) ?
    res.write("About Page") :
    (req.url===link[2]) ?
    res.write("Contact Page") :
    res.write("Not Found");
    res.end()
}).listen(8080);

