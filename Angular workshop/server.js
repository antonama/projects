var fspath = require('path');
var static = require('node-static');
 
var httpServer = require('./httpServer.js');
var staticServlet = require('./staticServlet.js');


var DEFAULT_PORT = 8000;
var DEBUG_TS = null;
console.log(process.env.LOCALAPPDATA);
function escapeHtml(value) {
    return value.toString().
        replace('<', '&lt;').
        replace('>', '&gt;').
        replace('"', '&quot;');
}

function createServlet(Class) {
    var servlet = new Class();
    return servlet.handleRequest.bind(servlet);
}

(function(argv) {
	var port = argv[2];
	if (argv[3]) {
        var paths = argv[3].split(";");
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var org = path;
            if(!fs.existsSync(path)) {
                path = fspath.resolve(process.cwd(), path);
                if (!fs.existsSync(path)) {
                    path = fspath.resolve(__dirname, path);
                }
            }
            if (fs.existsSync(path)) {
                modulesPaths.push(path);
            } else {
                throw "Path for loading modules not exist : " + org;
            }
        }
        console.log("Moodules loaded");
    }

    new httpServer.HttpServer({
        'GET': createServlet(staticServlet.StaticServlet),
        'HEAD': createServlet(staticServlet.StaticServlet)
    }).start(Number(argv[2]) || DEFAULT_PORT);
})(process.argv);