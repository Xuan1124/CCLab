let battle
let sword1 
let sword2
let tomb
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
    tomb = new Tomb()
    sword1 = new Sword1()
    sword2 = new Sword2()
}
function draw(){
    // background(10,10,20)
    let originalPhotoWidth = battle.width;
    let originalPhotoHeight = battle.height;
    let newPhotoHeight = height;
    let newPhotoWidth = originalPhotoWidth * (height/originalPhotoHeight)
    let excessWidth = newPhotoWidth - width


    image(battle,-excessWidth/2,0,newPhotoWidth,newPhotoHeight)
    tomb.display()
    sword1.display()
    sword2.display()

}
class Sword1{
    constructor(){
        this.x = 0
        this.speed = 2
    }
    display(){
        //wooden part
        push() 
        translate(this.x + 200,height/2)
        // translate(width/2-200,height/2) 
        rotate(PI/12) 
        fill(0) 
        ellipse(-5,35,4,250)
        fill("grey") 
        triangle(5,-50,0,-130,-10,-50)
        pop() 
        this.x += this.speed
        if(this.x<0 || this.x > 200){
            this.speed *= -1.01
        }
    }
}
class Sword2{
    constructor(){
        this.x = 400
        this.speed = 2
    }
    display(){
        push() 
        translate(this.x,height/2)
        rotate(-PI/12) 
        fill(0) 
        ellipse(-5,35,4,250)
        fill("grey") 
        triangle(5,-50,0,-130,-10,-50)
        pop() 
        this.x += this.speed
        if(this.x > 550 || this.x < 400){
            this.speed *= -1.01
        }
    }
}
class Tomb{
    constructor(){

    }
    display(){
        push() 
        fill("grey")
        noStroke()
        arc(width/2,height/2,100,100,PI,2*PI) 
        rect(width/2-50,height/2,100,80)
        // let textSizeVa1 = map(frameCount,0,100,0,5)
        // textSize(textSizeVa1)
        let opacityVa1 = map(frameCount=20,0,60,0,255)
        fill(0,opacityVa1)
        // fill(0)
        // textSize(20) 
        text("R.I.P.",width/2-10,height/2)
        pop() 
    }
}