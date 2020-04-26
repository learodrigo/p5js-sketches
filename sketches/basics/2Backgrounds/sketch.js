let extraCanvas
let x = 150
let y = 150

function setup () {
  createCanvas(windowWidth, windowHeight)
  extraCanvas = createGraphics(windowWidth, windowHeight)
  extraCanvas.clear()
  background(0)
}

function draw () {
  background(0)

  // Trails
  if (mouseIsPressed) {
    extraCanvas.fill(255, 20)
    extraCanvas.noStroke()
    extraCanvas.ellipse(mouseX, mouseY, 30, 30)
  }
  image(extraCanvas, 0, 0)

  // No trails
  x += random(-5, 5)
  y += random(-5, 5)
  fill('red')
  noStroke()
  rectMode(CENTER)
  rect(x, y, 20, 20)
}
