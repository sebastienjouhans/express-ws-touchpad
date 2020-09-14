(function() {

  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  console.log(HOST);

  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");


   map = function (x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  draw = function(x, y, w, h, radius) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    let newX = map(x, 0, w, 0, canvas.width);
    let newY = map(y, 0, h, 0, canvas.height);
    context.arc(newX, newY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'skyblue';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#030';
    context.stroke();
  }

  ws.onmessage = function(e) {
    let json = JSON.parse(e.data);
    draw(json.x, json.y, json.w, json.h, 10)
  }
}());
