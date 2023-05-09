let battle
let poor
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
    poor = new Poor()
}
function draw(){
    let originalPhotoWidth = battle.width;
    let originalPhotoHeight = battle.height;
    let newPhotoHeight = height;
    let newPhotoWidth = originalPhotoWidth * (height/originalPhotoHeight)
    let excessWidth = newPhotoWidth - width


    image(battle,-excessWidth/2,0,newPhotoWidth,newPhotoHeight)
    // background(230,190,110)
    // Image(battle,0,0,width,height)
    // fill(0) 
    poor.display()
    
}
class Poor{
    constuctor(){

    }
    display(){
        push() 
        // ellipse(width/2+10,height/2-10,20,10) 
        // ellipse(width/2-10,height/2-10,20,10) 
        // ellipse(width/2-24,height/2-4.5,20,10) 
        // ellipse(width/2+24,height/2-4.5,20,10) 
        fill(85,85,85) 
        ellipse(width/2+25,height/2+10,20,10) 
        ellipse(width/2-25,height/2+10,20,10) 
        ellipse(width/2-10,height/2+10,20,10) 
        ellipse(width/2+10,height/2+10,20,10) 
        fill("grey")
        ellipse(width/2+9,height/2+4,20,10) 
        ellipse(width/2-9,height/2+4,20,10) 
        fill(200,200,200)
        ellipse(width/2,height/2,20,10) 
        pop()
        push() 
        noFill()
        strokeWeight(5)
        stroke("red")
        circle(width/2,height/2,200)
        //for reference
        // point(width/2-90,height/2-85)
        // point(width/2+90,height/2+85) 
        strokeWeight(7)
        line(width/2-72,height/2-68,width/2+72,height/2+68) 
        pop() 
    }
}

