var nodeStatic = require('node-static');

var file = new(nodeStatic.Server)('./webroot');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(8080);
