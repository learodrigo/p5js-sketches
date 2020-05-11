function setup() {
  createCanvas(200, 200)
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(3)
  noFill()

  if (mouseX > 100) {
    ellipse(40, 30, 70, 50)
  } else if (mouseX > 50) {
    line(12, 90, 200, 0)
  } else {
    rect(143, 167, 24, 24)
  }
}
