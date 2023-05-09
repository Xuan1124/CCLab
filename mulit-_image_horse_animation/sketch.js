let horses = []
let b = 0
function preLoad(){
    for(let i = 0; i < 9; i++){
        let filename = "muybridge_" + i + "jpg"
        horses.push()
    }
}

function setup(){
    let cnv = createCanvas(400,400)
    cnv.parent("canvasContainer")

}
function draw(){
    background(100,140,110)

    // image(horses[0],0,0,width,height)
    Push()
    scale(0.5)
    image(horses[round(b)],0,0)
    
    pop() 

    b+=0.1
    if(b>8){
        b=0
    }
}