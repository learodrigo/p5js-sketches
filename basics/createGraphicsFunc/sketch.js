let x = 200
let y = 200
let overlay

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30)
  overlay = createGraphics(windowWidth - 30, windowHeight - 30)
  // testing: overlay.background(255, 0, 0)
  // clear() makes the backgound transparent
  overlay.clear()
  background(0)
}

function draw() {
  background(0)
  x += random(-5, 5)
  y += random(-5, 5)

  // No trail
  // This will be on the bottom layer and if I want this on top,
  // just put it after image overlay function
  fill(255, 0, 0)
  stroke(255)
  rectMode(CENTER)
  rect(x, y, 20, 20)

  // Trail
  if (mouseIsPressed) {
    let randomX = random(width)
    let randomY = random(height)
    overlay.fill(255, 50)
    overlay.noStroke()
    overlay.ellipse(randomX, randomY, 10, 10)
  }

  image(overlay, 0, 0)
}
