var http = require('http');
var url = require('url');

function HttpServer(handlers) {
    this.handlers = handlers;
    this.server = http.createServer(this.handleRequest_.bind(this));
}

HttpServer.prototype.start = function (port) {
    this.port = port;
    this.server.listen(port);
    console.log('Http Server running at http://localhost:' + port + '/');
};

HttpServer.prototype.handleRequest_ = function (req, res) {
    var logEntry = req.method + ' ' + req.url;
    if (req.headers['user-agent']) {
        logEntry += ' ' + req.headers['user-agent'];
    }
    console.log(logEntry);
    req.url = this.parseUrl_(req.url);
    var handler = this.handlers[req.method];
    if (!handler) {
        res.writeHead(501);
        res.end();
    } else {
        handler.call(this, req, res);
    }
};

HttpServer.prototype.parseUrl_ = function (urlString) {
    // rotes to resources

    if (urlString.indexOf("LynxCore/") > -1) {
        urlString =urlString.replace(/.*LynxCore\//, "/Base/Core/Client/dist/");
    }

    if (urlString.indexOf("LynxLibs/") > -1) {
        urlString = urlString.replace(/.*LynxLibs\//, "/Base/Libs/JsLibs/");
    }

    if (urlString.indexOf("LynxSiteResources/") > -1) {
        urlString = urlString.replace(/.*LynxSiteResources\//, "/Base/Apps/LynxSite/LynxSiteWeb/app/");
    }

    var parsed = url.parse(urlString);
    parsed.pathname = url.resolve('/', parsed.pathname);
    if(parsed.pathname.lastIndexOf("html") == parsed.pathname.length - 4) {
        DEBUG_MODE = parsed.search && parsed.search.indexOf("debug") > -1;
        DEBUG_TS = 1; //Date.now();
    }
    return url.parse(url.format(parsed), true);
};

exports.HttpServer = HttpServer;