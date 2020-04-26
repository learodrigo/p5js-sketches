const radius = 20
const rgb = {
  r: 255,
  g: 150,
  b: 50
}

let pos = {
  x: 100,
  y: 50
}

function setup () {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw () {
  stroke(0, 0)
  pos.x = random(windowWidth)
  rgb.r = random(255)
  rgb.g = random(255)
  rgb.b = random(255)
  pos.y = random(windowHeight)
  fill(rgb.r, rgb.g, rgb.b)
  ellipse(pos.x, pos.y, radius, radius)
}
