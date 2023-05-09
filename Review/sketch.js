x1 = 200
let blueChannel = 0
let xPosition = [100,120,5]
let yPosition = [130,10,250]
let noisePointer = 0
let x = 0
let y = 0
let sinStep = 0
function setup(){
    let cnv = createCanvas(400,400)
    cnv.parent("canvasContainer")
    console.log("i am in setup")
    // xPosition.push(200)

    // xPosition[4] = 1000
   
}

function draw(){ //frames of the animation
    background(100,140,110)
//     console.log("i am in draw")
//     for(let y = 0; y < height; y+=10){
//     for(let x = 0; x < width; x+=10){
//         fill(255)
//         rect(x,y,10,10)
//         if(mouseX > x &&
//             mouseX < x+10 &&
//             mouseY > y &&
//             mouseY < Y+10){
//                 fill(0)    
//             }
//         rect(x,y,10,10)
//     }
// }
    // fill(120,blueChannel,120)
    // circle(xPosition[0],yPosition[0],50)
    // circle(xPosition[1],yPosition[1],50)
    // circle(xPosition[2],yPosition[2],50)
    // fill(110,180,blueChannel)
    // circle(300,300,20)
    // x1 = x1 + 1
    // blueChannel = frameCount%255
    // sin() //-1,1
    // cos() //-1,1
    // noise() //0,1
    // random() //0,1
    // noStroke()
    // // let x = map(random(),0,1,100,300)
    // // for(let noisePointer = 0, noisePointer<innerWidth;noisePointer++)
    // y = map(noise(noisePointer),0,1,100,300)
    // circle(x,y,10)
    // noisePointer+=0.01
    // x += 1

    let sinValue = sin(sinStep)
    let size = map(sinValue,-1,1,10,200)
    fill(110,180,blueChannel)
    circle(width/2,height/2,size)
    sinStep+=0.01
    blueChannel = frameCount%255
}

