let i2 = 0;
let j2 = 0;

function setup() {
  createCanvas(400, 400);
  background(20);
}

function draw() {
  i2 += 1
  j2 += .1
  r = map(i2, 1, 200, 200, 250)
  g = map(i2, 1, 50, 50, 100)
  b = map(i2, 1, 200, 50, 100)
  stroke(r, random(g), b)
  let i = noise(width)
  let j = noise(width)
  strokeWeight(5)
  point (i2, height/2 + sin(j2) * 10)
  point (i2, height/6 + sin(j2) * 10)
  point (i2, height/1.2 + sin(j2) * 10)
}