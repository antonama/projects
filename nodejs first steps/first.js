var http = require('http');
var url = require('url');

var server = http.createServer(function (req,res) {

	// console.log(req.method, req.url);

	var urlParsed = url.parse(req.url, true);
	if (urlParsed.pathname == '/echo' && urlParsed.query.message)  {
		res.end(urlParsed.query.message)
	} else {
		res.statusCode = 404;
		res.end("Page not found");
	}

}).listen(1337,'127.0.0.1');