/*  var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello \n');
}).listen(6060);
console.log('Server running at http://localhost:6060/');
*/

/*
var express = require('express');
var app = express();
app.listen(3001);
console.log('Listening on port 3001...');


app.get('/', function(req, res) {
  res.send('Hello World\n');
});

app.get('/musician/:name', function(req, res) {


   console.log(req.params.name)
 
   res.send('{"id": 1,"name":"Matt","band":"BBQ Brawlers"}');
}); */


var express = require('express');

var app = express();

require('./routes')(app);

app.listen(3001);
console.log("Listening' on port 3001...");