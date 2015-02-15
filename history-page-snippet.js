/**
 * Created by terrydonaghe on 2/15/15.
 */
var lastCommand;
$(document).ajaxComplete(function(){
    var command = $(".dd-title.d-dialog-title").first().text();
    if(lastCommand != command){
        $.get('http://localhost:8182/echocommand?q=' + command);
        if(command === 'alexa turn all the lights off') {
            $.get('http://localhost:8182/turnalloff');
        }
        if(command === 'alexa turn all the lights on') {
            $.get('http://localhost:8182/turnallon');
        }
        lastCommand = command;
    }
});
