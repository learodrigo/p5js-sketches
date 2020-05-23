/**
 * Levy flight random walker
 * https://en.wikipedia.org/wiki/L%C3%A9vy_flight
 * https://www.youtube.com/watch?v=mWJkvxQXIa8&list=PLRqwX-V7Uu6ZwSmtE13iJBcoI-r4y7iEc
 */

let pos
let prev

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51)
  pos = createVector(width / 2, height / 2)
  prev = pos.copy()
}

function move() {
  let step = p5.Vector.random2D()

  // Handling probability
  let r = random(100)
  if (r < 1) {
    step.mult(100)
  } else {
    step.setMag(2)
  }

  // Adding
  pos.add(step)
}

function draw() {
  stroke(255)
  strokeWeight(2)

  line(pos.x, pos.y, prev.x, prev.y)
  // Updating prev
  prev.set(pos)
  move()
}
