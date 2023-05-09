let battle
let hammer
function preload(){
    battle = loadImage("battleBackdrop.jpg")
}
function setup(){
    let cnv;
    if(windowWidth > 800){
        cnv = createCanvas(800,600)

    }else{
        // window is smaller than 800
        cnv = createCanvas(windowWidth,windowWidth/4*3)

    }
    cnv.parent("canvasContainer")
    hammer = new Hammer(width,height)
}
function draw(){
    // background(10,10,20)
    let originalPhotoWidth = battle.width;
    let originalPhotoHeight = battle.height;
    let newPhotoHeight = height;
    let newPhotoWidth = originalPhotoWidth * (height/originalPhotoHeight)
    let excessWidth = newPhotoWidth - width


    image(battle,-excessWidth/2,0,newPhotoWidth,newPhotoHeight)
    hammer.display()

}
class Hammer{
    constructor(){
      this.angle = 0
      this.direction = 1
      this.speed = 0.01
      this.maxAngle = PI/4
    }
    display(){
        push()
        translate(width/2,height/2-50)
        rotate(this.angle)  
      strokeWeight(3)
      fill(0)
      //for reference
      // point(110,250)
      // point(150,105)
      // point(155,100)
      // point(160,105)
      // point(175,245)
      // point(180,250)
      // point(185,245)
      // point(195,105)
      // point(200,100)
      // point(205,105)
      // point(215,245)
      // point(220,250)
      // point(225,245)
      // point(230,105)
      // point(235,100)
      // point(240,105)
      // point(280,250)
      noFill()
      strokeWeight(2)
      arc(-100,14,-10,10,PI,2*PI)
      arc(70,14,-10,10,PI,2*PI)
      fill("grey")
      circle(70,56,80)
      circle(-100,56,80)
      strokeWeight(1)
      line(-100,10,-60,-135)
      noFill()
      arc(-55,-135,-10,10,PI,2*PI)
      arc(-10,-135,-10,10,PI,2*PI)
      arc(25,-135,-10,10,PI,2*PI)
      line(-50,-135,-35,15)
      
      line(-25,15,-15,-135)
      
      line(-5,-135,5,15)
      
      line(15,15,20,-135)
      
      line(30,-135,70,10)
      arc(-30,15,10,30,50,PI,TWO_PI)
      arc(10,15,10,30,50,PI,TWO_PI)
      pop()
      this.angle += this.speed * this.direction
      if (this.angle > this.maxAngle || this.angle < -this.maxAngle){
        this.direction *= -1
      } 
    }
  }