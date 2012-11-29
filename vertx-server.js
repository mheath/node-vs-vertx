load('vertx.js')

var port = 8080;

vertx.createHttpServer().requestHandler(function(req) {
    var file = req.path === '/' ? 'index.html' : req.path;
    req.response.sendFile('webroot/' + file);
}).listen(port);

vertx.logger.info("Simple HTTP server started on port " + port);
