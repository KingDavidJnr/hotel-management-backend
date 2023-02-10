const http = require('http')

const server = http.createServer(function(req, res){
    var body = "Hello World";

    res.writeHead(200, {
        'content-length': body.length,
        'content-type': 'text/plain'
    });

    res.end(body);
});

server.listen(8080);