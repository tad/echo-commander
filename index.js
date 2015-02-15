/**
 * Created by terrydonaghe on 2/15/15.
 */
var restify = require('restify');
var http = require('http');
var hueHelper = require('./bin/hue-helper');

var server = restify.createServer({
    name: 'echo-test'
});

server.use(restify.jsonp());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/echocommand/', function(request, response, next) {
    var command = request.query.q;
    console.log(command);
    response.send('OK');
    return next();
});

server.get('/turnalloff/', function(request, response, next) {
    console.log('here!');
    var myData = {};
    myData.on = false;
    var headers = {};
    headers["Content-Type"] = 'application/json';
    headers["Content-Length"] = JSON.stringify(myData).length;

    var options = {
        hostname: '10.0.1.3',
        method: 'PUT',
        headers: headers,
        path: '/api/newdeveloper/groups/0/action'
    };

    var output = '';
    var req = http.request(options, function(res) {
        res.on('error', function(e) {
            console.log('Error: ' + e.message);
        })
            .on('data', function(chunk) {
                console.log('chunk: ' + chunk);
                output += chunk;
            })
            .on('end', function() {
                console.log(output);
                console.log('Turned off');
            });
    });
    req.write(JSON.stringify(myData));
    req.end();
    response.send('Ok');
    return next();
});

server.get('/turnallon/', function(request, response, next) {
    console.log('here!');
    var myData = {};
    myData.on = true;
    var headers = {};
    headers["Content-Type"] = 'application/json';
    headers["Content-Length"] = JSON.stringify(myData).length;

    var options = {
        hostname: '10.0.1.3',
        method: 'PUT',
        headers: headers,
        path: '/api/newdeveloper/groups/0/action'
    };

    var output = '';
    var req = http.request(options, function(res) {
        res.on('error', function(e) {
            console.log('Error: ' + e.message);
        })
            .on('data', function(chunk) {
                console.log('chunk: ' + chunk);
                output += chunk;
            })
            .on('end', function() {
                console.log(output);
                console.log('Turned off');
            });
    });
    req.write(JSON.stringify(myData));
    req.end();
    response.send('Ok');
    return next();
});

server.get('/foo/', function(request, response, next) {
    console.log('Stuff!');
    return next();
});

server.listen(8182, function() {
    console.log('Restify Server is up and running on port: 8182');
});