const canvas = 255
const c = {
  d: 20,
  x: 10,
  y: 50,
}

let velocity = 5

function setup() {
  createCanvas(canvas, canvas)
}

function draw() {
  background(0)

  ellipse(c.x, c.y, c.d, c.d)

  // Colouring the ball
  if (c.x <= canvas / 3) {
    fill(100, 200, 250)
  } else if (c.x <= (canvas / 3) * 2) {
    fill(255, 200, 250)
  } else {
    fill(150, 200, 100)
  }

  // Direction
  if (c.x > canvas || c.x < 0) {
    velocity *= -1
  }

  c.x += velocity
}
