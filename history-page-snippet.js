/**
 * Created by terrydonaghe on 2/15/15.
 */
var lastCommand;
$(document).ajaxComplete(function(){
    var command = $(".dd-title.d-dialog-title").first().text();
    if(lastCommand != command){
        $.get('http://localhost:8182/echocommand?q=' + command);
        lastCommand = command;
    }
});
