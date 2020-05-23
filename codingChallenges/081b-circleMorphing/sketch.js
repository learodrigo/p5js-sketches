/**
 * Implement one possible solution to Golan Levin's Circle Morphing challenge
 *
 * https://www.youtube.com/watch?v=mvgcNOX8JGQ
 */

let cirPath = []
let spacing = 5

function polarToCartesian (r, a) {
  return createVector(r * cos(a), r * sin(a))
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  let radius = 100
  let i = 0

  for (let a = 0; a < 360; a += spacing) {
    let cv = polarToCartesian(radius, a)
    cv.active = true
    if (a % 120 == 0) cv.fixed = true
    cirPath.push(cv)
  }
}

function draw() {
  background(0)
  translate(width/2, height/2)
  rotate(30)

  stroke(255)
  strokeWeight(6)
  noFill()

  beginShape()
    for (let i = 0; i < cirPath.length; i++) {
      let v = cirPath[i]
      if (v.active) vertex(v.x, v.y)
    }
  endShape(CLOSE)

  if (cirPath.length > 3) {
    let index = floor(random(cirPath.length))
    let v = cirPath[index]
    if (!v.fixed) cirPath.splice(index, 1)
  }
}
