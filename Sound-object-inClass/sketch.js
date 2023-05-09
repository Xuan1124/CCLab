// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/


let bodies = [];
let creatures = []
let numCreatures = 5
let karate
let gong 
let plop

function preload(){
    for(let i = 0; i < 3; i++){
        bodies.push( loadImage("bodies/body_"+i+".png"))
 
    }
    // karate = loadSound("sounds/423526__ccolbert70eagles23__karate-chop.m4a")
    gong = loadSound("sounds/266566__gowlermusic__gong-hit.wav")
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");  
    for(let i=0;i<numCreatures;i++){
        let newCreature = new Creature(random(width),random(height))
        creatures.push(newCreature)
    }

}

function draw(){
    background(120, 40, 240);
    for(let i=0;i<creatures.length;i++){
        creatures[i].update()
        creatures[i].display()
    }

    // image(bodies[0], 0, 0);
}


class Creature{
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-1, 1);
        this.bodyIndex = floor(random(0,3))
        this.radius = 32

    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //bounce
        if(this.x<this.radius||this.x > width -this.radius){
            //turn around
            this.xSpeed = -this.xSpeed
            gong.play()
        }
        if(this.y<this.radius||this.y > height -this.radius){
            this.ySpeed = -this.ySpeed
        }
    }
    display(){
        push();
        translate(this.x, this.y)
   
        circle(0,0,40)
        
        this.drawBodyImage()
        noFill()
        // circle(0,0,100)

        pop();
    }
    drawBodyImage(){
        push()
        scale(0.1) 
        let imageWidth = bodies[0].width;

        let imageHeight = bodies[0].height;
        image(bodies[this.bodyIndex],-imageWidth/2,-imageHeight/2)
        pop() 

    }
}

