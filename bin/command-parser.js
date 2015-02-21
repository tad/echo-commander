// Copyright (c) 2015 Terry Donaghe

var hueHelper = require('./hue-helper');

// Future work
var colorWords = ["green", "default", "red", "blue", "purple"];

module.exports = {
    executeCommand: function(command, callback) {
        console.log(command);
        var commandArray = command.split(' ');

        if ( commandArray.containsWord('lights') ) {
            if(commandArray.containsWord('on') && !commandArray.containsWord('off')) {
                // Turn the lights on
                hueHelper.turnLightsOn(function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('off') && !commandArray.containsWord('on')) {
                // Turn the lights off
                hueHelper.turnLightsOff(function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('green')) {
                // Make the lights green
                hueHelper.colorLights('green', function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('default')) {
                // Make the lights green
                hueHelper.colorLights('default', function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('red')) {
                // Make the lights green
                hueHelper.colorLights('red', function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('blue')) {
                // Make the lights green
                hueHelper.colorLights('blue', function(results) {
                    console.log(results);
                });
            }
            if (commandArray.containsWord('purple')) {
                // Make the lights green
                hueHelper.colorLights('purple', function(results) {
                    console.log(results);
                });
            }
        }
        callback('done');
    }
};

Array.prototype.containsWord = function(wordToFind) {
    return this.indexOf(wordToFind) > -1;
};