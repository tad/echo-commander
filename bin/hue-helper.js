// Copyright (c) 2015 Terry Donaghe    

var http = require('http');
var colors = require('./colors.js');

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
                    console.log('Turned on');
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
    },

    colorLights: function(color, callback) {
        console.log('Turning lights to ' + color);

        var colorXY = [];

        switch(color) {
            case "green":
                colorXY = colors.rgbToCIE1931(0, 255, 0);
                setToColor(colorXY);
                break;
            case "purple":
                colorXY = colors.rgbToCIE1931(128, 0, 128);
                setToColor(colorXY);
                break;
            case "red":
                colorXY = colors.rgbToCIE1931(255, 0, 0);
                setToColor(colorXY);
                break;
            case "blue":
                colorXY = colors.rgbToCIE1931(0, 0, 255);
                setToColor(colorXY);
                break;
            case "default":
                setToDefault();
                break;
            default:
                setToDefault();
        }

        console.log(colorXY);

        callback(color);
    }
};

var setToDefault = function() {
    var colorXY = [];
    colorXY[0] = 0.4596;
    colorXY[1] = 0.4105;

    var myData = {};
    myData.xy = colorXY;
    myData.bri = 254;
    myData.hue = 14910;
    myData.sat = 144;

    console.log(myData);

    var headers = {};
    headers["Content-Type"] = 'application/json';
    headers["Content-Length"] = JSON.stringify(myData).length;

    var options = {
        hostname: '10.0.1.3',
        method: 'PUT',
        headers: headers,
        path: '/api/newdeveloper/lights/1/state'
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
                console.log('Color changed');
            });
    });
    req.write(JSON.stringify(myData));
    req.end();
};

var setToColor = function(colorXY) {
    var myData = {};
    myData.xy = colorXY;

    console.log(myData);

    var headers = {};
    headers["Content-Type"] = 'application/json';
    headers["Content-Length"] = JSON.stringify(myData).length;

    var options = {
        hostname: '10.0.1.3',
        method: 'PUT',
        headers: headers,
        path: '/api/newdeveloper/lights/1/state'
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
                console.log('Turned green');
            });
    });
    req.write(JSON.stringify(myData));
    req.end();
};