const http = require("http");
http.createServer((req,res)=>{
  res.setHeader("Content-Type","text/html");
    if (req.url==='/home') {
    res.write("Home Page")
    }
    else if (req.url==='/about') {
    res.write("About Page")
    }
    else if (req.url==='/contact') {
      res.write("Contact Page")
    }
    else{
      res.write("Not Found")
    }

    res.end()
}).listen(8080);

