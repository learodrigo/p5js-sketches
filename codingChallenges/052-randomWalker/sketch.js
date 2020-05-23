/**
  * Simple random walker to up, right, down, left direction
  */

// Random walk art, random walk 2d, random walk 3d - Google
// What if color takes a role
// What if we have many random walker and when intercepting, coloring sth or a new random walk appear
// What if the randomness is according to some probability to create patterns
// What if the random walk is not allowed to walk in previous spots - Self voiding
// What if the random walk changes notes in a melody
// What if the random walk makes a music composition
// What if each random walk is a vertix of a polygon
// What if it walks in a color space

let x = 0
let y = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51)
  x = width / 2
  y = height / 2
}

function draw() {
  stroke(255)
  strokeWeight(2)
  point(x, y)

  // Random number to pick direction
  let r = floor(random(8))
  switch (r) {
    case 0:
      y -= 1
      break
    case 1:
      x += 1
      break
    case 2:
      y += 1
      break
    case 3:
      x -= 1
      break
    case 4:
      x += 1
      y -= 1
      break
    case 5:
      x += 1
      y += 1
      break
    case 6:
      x -= 1
      y += 1
      break
    case 7:
      x -= 1
      y -= 1
      break
  }
}
