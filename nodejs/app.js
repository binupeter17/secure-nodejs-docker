const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js Container!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\x1b[33mServer running at http://localhost:${PORT}/\x1b[0m`);
});
