/**
 * Created by terrydonaghe on 2/15/15.
 */
//var httpHelper = require('./http-helper');
//var setup = require('../setup');
//var logger = setup.getLogger();

var http = require('http');

module.exports = {
    turnLightsOn: function(callback) {
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


        callback('on!');
    },
    turnLightsOff: function(callback) {
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

        console.log('Lights turned off');
        callback('off!');
    }
};