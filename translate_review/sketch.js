let squareSize = 50
let a = 0
let a2 = 0
let bigRadius = 140
function setup(){
    let cnv = createCanvas(400,400)
    cnv.parent("canvasContainer")

}

function draw(){
    background(100,140,110,1)

    push()
    translate(width/2,height/2) 
    rotate(radians(a)) 
    // rect(-squareSize/2 + 140,-squareSize/2,squareSize,squareSize) 
    push() 
    translate(bigRadius,0)
    rotate(radians(a2))
    // rect(-squareSize/2,-squareSize/2,squareSize,squareSize)
    fill(0)
    noStroke()
    circle(-squareSize/2,-squareSize/2,2)
    circle(squareSize/2,-squareSize/2,2)
    circle(squareSize/2,squareSize/2,2)
    circle(-squareSize/2,squareSize/2,2)
    // fill(0,255,0) 
    // circle(0,0,5)
    pop()


    fill(255,0,0) 
    circle(0,0,5)
    pop()  
    a++
    a2+=5
    bigRadius-=0.1
    
}