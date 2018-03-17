var express = require('express');
var serveStatic = require('serve-static');
var port = 8000;

var app = express();

app.use(serveStatic('demo', {'index': ['index.html']}));
app.listen(port);
console.log('Rapid7 Product Logo demo is running at => http://localhost:' + port + '/\nCTRL + C to shutdown');
