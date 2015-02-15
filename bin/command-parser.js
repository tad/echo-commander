/**
 * Created by terrydonaghe on 2/15/15.
 */

var hueHelper = require('./hue-helper');

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
        }
        callback('done');
    }
};

Array.prototype.containsWord = function(wordToFind) {
    return this.indexOf(wordToFind) > -1;
};