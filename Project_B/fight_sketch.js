let battle
let swords
let bow
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
    swords = new Sword(800,600)
    bow = new Bow(800,600)
}
function draw(){
    let originalPhotoWidth = battle.width;
    let originalPhotoHeight = battle.height;
    let newPhotoHeight = height;
    let newPhotoWidth = originalPhotoWidth * (height/originalPhotoHeight)
    let excessWidth = newPhotoWidth - width
    image(battle,-excessWidth/2,0,newPhotoWidth,newPhotoHeight) 
    swords.display()
    bow.display()

}
class Sword{
    constructor(){
      this.rotation = 0
    }
    display(){
      this.drawSword()
      this.drawTip()
      this.rotation += 0.02
    }
    drawSword(){
      push()
      translate(width/2+200,height/2)
      rotate(this.rotation)  
       fill(0)
       ellipse(0,0,4,250)
      pop()
    }
    drawTip(){
      push()
      translate(width/2+200, height/2)
      rotate(this.rotation)
      fill("grey")
      triangle(6,-80,0,-130,-6,-80)
      pop()
    }
  }
  class Bow {
    constructor(){
      this.rotation = 0
    }
    display(){
        
      this.drawBow()
      this.drawString()
      this.drawArrow()
      this.rotation += 0.02
      
    }
    drawBow(){
      push()
      translate(width/2-200,height/2)
      rotate(this.rotation)
       noFill()
    beginShape()
      strokeWeight(3)
    curveVertex(-50,50)
    curveVertex(-50,50)
    curveVertex(-20,0)
    curveVertex(-20,-50)
    curveVertex(-50,-100)
    curveVertex(-50,-100)
    endShape()
      pop()
    }
    drawString(){
      push()
      translate(width/2-200,height/2)
      rotate(this.rotation)
      strokeWeight(1)
      line(-50,50,-50,-100)
      pop()
    }
    drawArrow(){
        push() 
        translate(width/2-200,height/2)
        rotate(this.rotation)
        strokeWeight(2)
      line(-100,-30,20,-30)
      fill("grey")
      triangle(20,-35,40,-30,20,-25)
      pop()
    }
    
  }