let i2 = 0;
let j2 = 0;

function setup() {
  createCanvas(400, 400);
  //frameRate(3)
  background(250);
}

function draw() {
  i2 += 1
  j2 += 4
  r = map(i2, 1, 200, 0, 50)
  g = map(i2, 1, 50, 50, 100)
  b = map(i2, 1, 200, 100, 250)
  stroke(r, random(g), b)
  let i = noise(width)
  let j = noise(width)
  strokeWeight(5)
  point (noise(i) + i2, height/2 + cos(j2)* frameCount)
}