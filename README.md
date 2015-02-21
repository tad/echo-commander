## Echo-Commander

An experimental project to get Amazon Echo to communicate with various APIs via voice commands, the Phillips Hue API in particular.

## Notes
This code is VERY primitive, and not at all reflective of what proper code should look like. Very little refactoring has been done yet. Very few features are available.  
This is purely experimental and is designed solely to be a proof of concept and a toy.  
There are many, many different ways to accomplish what I've done here. This is the result of just a few hours of experimentation.  

My code is calling directly to my Hue bridge running on my local network. You will need to modify the url to point to your bridge.  
Here's a great place to start on learning the Philips Hue API:  
http://www.developers.meethue.com/documentation/getting-started

The code that changes color is currently running only against my bulb with id 1. You may or may not want to do this. Using the Philips link above, you should
have no problem figuring out how to change the URL to suit your purposes.

I will be making changes to this code irregularly as I find time.

Feel free to use this code in any way you see fit. If you find anything that I've done to be useful, please link back to this project.
Definitely link back to the projects listed below under the Thanks section.

## Vague Instructions

I could totally be missing steps below. Let me know:

Pull down this source

Update urls to point to YOUR Hue bridge. See above.

npm install

npm start

Go to echo.amazon.com and sign into your Echo.

Copy the code in the history-page-snippet.js file onto the clipboard

Go to Settings->History and then open the Javascript Console (Cmd-option-J) and paste in the snippet.

Try some of these:  
Alexa, turn the lights on stop.  
Alexa, turn the lights off stop.  
Alexa, lights color red stop.  
Alexa, lights color green stop.  
Alexa, set the lights to default stop.  

You should see your commands show up on the History page in the browser as well as in the node console along with other info to help debug!


## Thanks
This work is based on the project described at the link below:  
http://blog.zfeldman.com/2014-12-28-using-amazon-echo-to-control-lights-and-temperature/

I am pretty much using his Javascript for injection intact, but while his service code is written in Ruby, mine is written in Javascript and isn't nearly as sophisticated yet.

Major thanks also to the project below. I'm using a barely modified version of his color.js file in order to convert between RGB values and the XY coordinates required by Hue.
He also has code to convert from Hex color values to XY cooords.  
https://github.com/bjohnso5/hue-hacking

You can find a big list of color names to RGB codes (and hex values) here:   
http://cloford.com/resources/colours/500col.htm
