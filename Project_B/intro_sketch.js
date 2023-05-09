let img
function preload(){
    img = loadImage("battleBackdrop.jpg")
}
function setup(){
    // windowWidth
    let cnv = createCanvas(1500,400)
    cnv.parent("canvasContainer")
}

function draw(){
    background(230,190,110)
    fill(0) 
    circle(1500,400,10)
    fill(255) 
    circle(0,0,10)
    fill(150,10,90)
    circle(1500,0,10) 
    fill(50,100,150)
    circle(0,400,10) 
    image(battle,0,0,width,height) 
    
}