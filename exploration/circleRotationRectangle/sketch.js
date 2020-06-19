let time = 0
const velocity = 3
const radius = 100
const ellipseSize = 50

function setup() {
  createCanvas(400, 400)
  smooth()
  rectMode(CENTER)
}

function draw() {
  background(255)
  fill(10)
  noStroke()
  rect(width / 2, height / 2, 50, 100)

  push()
    translate(width / 2, height / 2)
    rotate(radians(time))
    fill(255, 0, 0)
    ellipse(radius, 0, ellipseSize, ellipseSize)
  pop()

  time += velocity
}
