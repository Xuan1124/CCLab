
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
    tomb = new Tombstone()
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
    // fill(0)
    // textSize(20) 
    // text("DIE",width/2-15,height/2+20)

}
class Tombstone{
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
        let opacityVa1 = map(frameCount,0,60,0,255)
        fill(0,opacityVa1)
        // fill(0)
        // textSize(20) 
        text("You Die",width/2-17,height/2+10)
        pop() 
    }
}