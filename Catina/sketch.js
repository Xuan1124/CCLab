let rad = 20
let x = 5;
let y = 5;
let xpos, ypos
let xspeed = 5
let yspeed = 6.1
let xdirection = 2
let ydirection = 3
function setup(){
    let cnv = createCanvas(400,400)
    cnv.parent("canvasContainer")
    stroke(1)
    frameRate(15);
    ellipseMode(RADIUS);
    xpos = width/2;
    ypos = width/2;
}

function draw(){
    background(255, 100, 150, 100);
    xpos = xpos + xspeed * xdirection //p5 reference
    ypos = ypos + yspeed * ydirection //p5 reference
    
    if (xpos > width - rad || xpos < rad){
      xdirection *= -1; //p5 reference
    }
    if (ypos > height - rad || xpos < rad){
      ydirection *= -1; 
}
let s=random(0,255)
  let a=random(0,255)
  let u=random(0,255)

  ellipse(xpos, ypos, rad, rad)
  fill(s,a,u);
  x = x + 2;
  ellipse(xpos, ypos, 50, 50);

  fill(s,a,u);
  y = y + 10;
  circle(xpos, 50, 50);

  fill(s,a,u);
  ellipse(x, ypos, 40, 40);
  x = x + 1;

  ellipse(xpos, y, 50, 50);
  x = x + 4;
}