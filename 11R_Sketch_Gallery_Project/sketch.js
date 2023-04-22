let NUM_OF_STARS = 55
let stars = []
angle = 30
function setup(){
    let cnv = createCanvas(1200,600)
    cnv.parent("canvasContainer")
    for (let i = 0; i < NUM_OF_STARS; i++) {
        stars.push(new Star(random(width), random(height)));
      }
}

function draw(){
    background(0,0,50,50)
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        s.move();
        s.speedUp();
        s.reappear();
        s.display();
      }
}
class Star {
    constructor(x, y) {
        this.x = x;
    this.y = y;
    this.xSpeed = random(15, 20);
    this.ySpeed = random(15, 20);

    this.xDirection = 2;
    this.yDirection = 3;

    this.r = random(60, 220);
    this.g = random(0, 255);
    this.b = random(50, 200);

    this.size = random(-1, 8);
  }
  speedUp() {
    this.xSpeed = this.xSpeed * 0.8;
    this.ySpeed = this.ySpeed * 0.9;
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
  }
 }
 rotate() {
    this.rotateAngle += this.rotateSpeed;
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.ySpeed += 0.3;
    this.xSpeed = this.ySpeed * 1;

    this.yDirection = 2;
    this.xDirection = 3;
}
display() {
push();
    translate(this.x, this.y);
    noStroke();
    circle(0, 0, this.size);
    let angleRadians = radians(angle);
    rotate(angleRadians);
    stroke(150);
    strokeWeight(1);
    fill(this.r, this.g, this.b);
    rect(0, 0, this.size, this.size);
    angle++;
    pop();
}
}
