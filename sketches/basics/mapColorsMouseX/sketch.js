let circle = {
  x: 0,
  y: 0,
  r: 50,
}

let col = {
  r: 0,
  g: 0,
  b: 255
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(random(0, 255))
}

function draw() {
  // map mouseX value in the range 0-600 and return the value in 0-255
  col.r = map(mouseX, 0, windowWidth, 0, 255)
  col.g = map(mouseY, 0, windowWidth, 255, 0)
  col.b = map(mouseX, 0, windowWidth, 255, 0)
  fill(col.r, col.g, col.b)
  noStroke()
  ellipse(mouseX, mouseY, circle.r, circle.r)
}

function mousePressed () {
  background(random(0, 255))
}
