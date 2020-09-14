(function() {

  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  console.log(HOST);

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.onmousemove = function(event) {onmousemove(event)};
  canvas.addEventListener("touchmove", onmousemove);


  ontouchevent = function (e)
  {
    if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } 
  }

  ontoucheventmove = function (e)
  {
    if (e.target.nodeName == 'CANVAS') 
    { 
      e.preventDefault(); 
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      sendCoordinate({"x":x, "y":y, "w":canvas.width, "h":canvas.height});
    }
  }

  canvas.addEventListener("touchmove", ontoucheventmove, false);
  canvas.addEventListener("touchstart", ontouchevent, false);
  canvas.addEventListener("touchend", ontouchevent, false);

  
  onmousemove = function (e)
  {
    var x = e.clientX;
    var y = e.clientY;
    sendCoordinate({"x":x, "y":y, "w":canvas.width, "h":canvas.height});
  }

  sendCoordinate = function(json)
  {
    let data = JSON.stringify(json);
    console.log(data);
    ws.send(data);
  }
  
}());
