let battle
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
        fill("grey")
        noStroke()
        arc(width/2,height/2,100,100,PI,2*PI) 
        rect(width/2-50,height/2,100,80)
        let opacityVa1 = map(frameCount,0,60,0,255)
        fill(0,opacityVa1)
        text("R.I.P",width/2-12,height/2)
        text("You died",width/2-22,height/2+10) 
        text("a nameless ",width/2-27,height/2+20) 
        fill("yellow")
        text("HERO",width/2-18,height/2+35) 
        // text("You died a nameless hero",width/2-10,height/2-10) 
        pop() 
    }
}