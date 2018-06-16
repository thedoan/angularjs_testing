var connect = require('connect');
var app = connect();
var http = require('http');
var serveStatic = require('serve-static');
var serve = serveStatic('./', {'index': ['index.html', 'index.htm']})
app.use(serve)
	var server = require('http').createServer(app)
	.listen(8000);

