var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

var ballsize = 30;
var myball = {
  x: ballsize + 0,
  y: ballsize + 0,
};

let balldir = Math.random() * 2;
var movedir = { x: balldir, y: balldir };

function draw() {
  ctx.beginPath();
  ctx.shadowColor = "black";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 20;
  ctx.font = "50px Arial";
  ctx.fillText("Hello Sapthagiri", 150, 140);
  ctx.arc(myball.x, myball.y, ballsize, 0, Math.PI * 2, false);
  ctx.fill();
}

let colors = ["red", "blue", "green", "yellow", "orange"];
function moveball() {
  requestAnimationFrame(moveball);
  ctx.clearRect(0, 0, w, h);
  let ranColors = Math.floor(Math.random() * 5);
  //   console.log(colors[ranColors]);
  if (myball.y >= h - ballsize || myball.y < ballsize) {
    movedir.y = -movedir.y;
    ctx.fillStyle = colors[ranColors];
  }
  if (myball.x >= w - ballsize || myball.x < ballsize) {
    movedir.x = -movedir.x;
    ctx.fillStyle = colors[ranColors];
  }

  myball.x += movedir.x;
  myball.y += movedir.y;
  draw();
}

moveball();

////////////////////////////////////////
//anothe rmethod for chnaging ball color

// ballcolor =  '#' + Math.random().toString(16).substr(-6)
