var uneval = function (obj, ctx) {
    var objType = typeof obj;

    // circular reference check
    ctx = ctx || {};
    if (ctx[obj])
        throw "Circular references detected while uneval()-ing.";

    ctx[obj] = true;

    // special objects
    if (obj === null)
        return "null";
    if (obj === undefined)
        return "undefined";
    if (obj !== obj) // isNaN does type coercion, so can't use that.
        return "NaN";
    if (obj === Infinity)
        return "Infinity";
    if (obj === -Infinity)
        return "-Infinity";

    // atoms
    switch (objType) {
        case 'function': return "(" + obj.toString() + ")";
        case 'string':
        case 'number':
            return sys.inspect(obj);
    }

    // special data types
    if (obj instanceof Array)
        return "[" + obj.map(function (o) { return uneval(o, ctx); }).join(",") + "]";

    if (obj instanceof Date)
        return "(new Date('" + obj.toString() + "'))";

    // complex objects
    var key, results = [];

    for (key in obj)
        results.push(uneval(key, ctx) + ":" + uneval(obj[key], ctx));

    return "{" + results.join(",") + "}";
}

var inspect = function (obj, maxLevels, showFunctions, level) {
    var str = '', type, msg;

    if (showFunctions == undefined) showFunctions = false;
    if (level == null) level = 0;
    var indent = "                                      ".substring(0, level * 3);
    if (maxLevels == null) maxLevels = 1;
    if (maxLevels < 1) return indent + 'Error: Levels number must be > 0';
    if (obj == null) return indent + 'Error: Object NULL';

    for (property in obj) {
        try {
            type = typeof (obj[property]);
            str += indent + '(' + type + ') ' + property +
               ((obj[property] == null) ? (': null') : ('')) + '\n';

            if (showFunctions && type == 'function') {
                str += uneval(obj[property]).replace(/^/g, indent + "   ");
            }
            if ((type == 'object') && (obj[property] != null) && (level + 1 < maxLevels))
                str += inspect(obj[property], maxLevels, showFunctions, level + 1);
        } catch (err) {
            // Is there some properties in obj we can't access? Print it red.
            if (typeof (err) == 'string') msg = err;
            else if (err.message) msg = err.message;
            else if (err.description) msg = err.description;
            else msg = 'Unknown';

            str += indent + '(Error) ' + property + ': ' + msg + '\n';
        }
    }

    return str;
}
