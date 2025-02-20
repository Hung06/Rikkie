const { createServer } = require('node:http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json',"text/html;charset=utf-8"); 
    const userData = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });
    // res.end(userData);
    if (req.url === "/") {
      res.end('Welcome to the homepage!');
    } else if(req.url === "/users") {
        res.end(userData);
    }else{
        res.end('Page not found');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
