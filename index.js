const http = require('http');
const dt = require('./modules')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("time" + dt.myDateTime());
  res.end();
}).listen(8080);