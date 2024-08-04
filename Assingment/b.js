const http = require('http');
const qs = require('querystring');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        console.log(body);
        req.on('end', () =>  res.end(`Hello ${qs.parse(body).user}!`));
    }
    else {res.end(`
            <form action="/greet" method="POST">
                <input type="text" name="user">
                <button type="submit">Submit</button>
            </form>
        `);
    }
}).listen(8080);
