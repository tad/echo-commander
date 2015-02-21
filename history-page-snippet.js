// Based on work here: http://blog.zfeldman.com/2014-12-28-using-amazon-echo-to-control-lights-and-temperature/
var lastCommand;
$(document).ajaxComplete(function(){
    var command = $(".dd-title.d-dialog-title").first().text();
    if(lastCommand != command){
        $.get('http://localhost:8182/echocommand?q=' + command);
        lastCommand = command;
    }
});
