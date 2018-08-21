var http = require('http');
var dt = require('./dateModule')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The data and time is : " + dt.dateTime());
    res.end();
}).listen(8080);