const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Server is running on port 5000');
});
server.on('error', (e) => {
  console.error('Port error:', e.message);
  process.exit(1);
});
server.listen(5000, () => {
  console.log('Successfully bound to port 5000');
  setTimeout(() => process.exit(0), 2000);
});
