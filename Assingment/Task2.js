const http = require('http');
const qs = require('querystring');
const styles = `
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(27, 26, 26);
}
form{
  display: flex;
  flex-direction: column;
}

input[type="text"]{
  margin: 10px;
  border:none ;
  border-bottom: 3px solid cyan;
  background-color: transparent;
  font-size: 15px;
  color: aquamarine;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1px;
}
input[type='text']:focus{
  border: none;
  outline: none;
  border-bottom: 3px solid cyan;
}

button{
  margin: 10px;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to right, blue,rgb(255, 2, 255));
  padding: 6px 4px ;
  font-size: larger;
  font-weight: bold;
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-variant: small-caps;
  transition: background-image 3s linear  ;

}
button:hover{
  background-image: linear-gradient(to right,rgb(255, 2, 255), blue);
}
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        console.log(body);
        req.on('end', () =>  res.end(`Hello ${qs.parse(body).user}!`));
    }
    else {res.end(`
        <html>
        <head>
          <style>${styles}</style>
        </head>
          <body>
            <form action="/greet" method="POST">
                <input type="text" name="user">
                <button type="submit">Submit</button>
            </form>
          <body>
        </html>
        `);
    }
}).listen(8080);
