# express-ws-touchpad

This example shows how websocket can be used in order to have mobile phone connect to a server and control content a screen that is not a touchscreen. This is 

## Development

```shell
$ git clone {repo}
$ cd express-ws-touchpad
$ npm install # or yarn i
$ node server.js
```

And access to [localhost:3000](http://localhost:3000/).

If you want to connect your mobile phone to the server in order to open the touchpad page, here is what you need to. 
* Fing out the ip address of the computer the nodejs server is on, on your local network (for me it is http://192.168.1.3)
* Connect your phone to the same network as your computer where the nodejs server is running.
* Open the browser on your phone then type the ip address of the computer and then append touchpad.html (for me it is http://192.168.1.3/touchpad.html)
* On you computer open the browser and navigate to the webpage http://localhost:3000/screen.html
The result should be that when you are moving your finger on the touchpad on your phone, a circle should be moving on the screen.html page on your computer.

A QR code containing the address of the touchpad url can also be create in order to help the user navigate to the page. Users would only need to scan the QR code with their camera app and tap the link in order to open the page.


