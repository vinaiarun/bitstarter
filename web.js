var express = require('express');
var fs = require('fs');
var buf = new Buffer(50);


fs.readFile('./index.html', function(err, buf) {
  if (err) throw err;
  console.log(buf);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
