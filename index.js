// Copyright (c) 2015 Terry Donaghe

var restify = require('restify');
var http = require('http');
var commandParser = require('./bin/command-parser');

var server = restify.createServer({
    name: 'echo-test'
});

server.use(restify.jsonp());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/echocommand/', function(request, response, next) {
    var command = request.query.q;
    commandParser.executeCommand(command, function(result) {
       console.log(result);
    });
    response.send('OK');
    return next();
});

server.listen(8182, function() {
    console.log('Restify Server is up and running on port: 8182');
});