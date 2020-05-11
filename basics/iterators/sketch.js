function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30)
}

function draw() {
  background(0)
  noStroke()

  // blue ellipses
  let x = 50
  while (x < height) {
    fill(0, 0, 255)
    ellipse(x, x, x / 4, 25)
    x += 50
  }

  // red ellipses
  for (let i = 0; i <= width; i += 50) {
    fill(255, 0, 0)
    ellipse(i, 300, 25, 25)
  }

  // green squares
  for (let x = 0; x < mouseX; x += 50) {
    for (let y = 0; y < mouseY; y += 50) {
      noFill()
      strokeWeight(2)
      stroke(0, 255, 0)
      ellipse(x + 25, y + 25, 25,25)
    }
  }

}
