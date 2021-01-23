let i2 = 0;
let j2 = 0;

function setup() {
  createCanvas(400, 400)
  background(20)
  rectMode(CENTER)
}

function draw() {
    translate(width/2,height/2)
    stroke(255)
    push()
    for (let i = 0; i < 6; i ++) {
        line(0, 0, 30, 0)
    }
    pop()
}