let battle
let bow
let arrow
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
    bow = new Bow()
    arrow = new Arrow()
}
function draw(){
    // background(10,10,20)
    let originalPhotoWidth = battle.width;
    let originalPhotoHeight = battle.height;
    let newPhotoHeight = height;
    let newPhotoWidth = originalPhotoWidth * (height/originalPhotoHeight)
    let excessWidth = newPhotoWidth - width


    image(battle,-excessWidth/2,0,newPhotoWidth,newPhotoHeight)
    bow.display()
    // arrow.display()
    bow.shootArrow()

}
class Bow{
    constructor(){
        this.arrowX = -100

    }
    display(){
        push()
        translate(width/2-200,height/2)
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
        strokeWeight(1)
        line(-50,50,-50,-100)
        pop()  
        // this.arrowX = mouseX - (width/2 - 200)
        // push()
        // translate(this.arrowX,0)
        // strokeWeight(2)
        // translate(this.arrowX,0)
        // strokeWeight(2)
        // line(-100,-30,20,-30)
        // fill("grey")
        // triangle(20,-35,40,-30,20,-25)
        // pop()
    }
    shootArrow(){
        this.arrowX += 5
        if(this.arrowX > 800){
            this.arrowX = -100
        }
        arrow.display(this.arrowX)
    }
}
class Arrow{
    constructor(){

    }
    display(x){
        push()
        translate(width/2-200,height/2)
        translate(x,-30)
        strokeWeight(2)
        line(0,0,120,0)
        fill("grey")
        triangle(120,-5,140,0,120,5)
        pop()
    }
}
// function mouseClicked(){
//     bow.shootArrow()
// }