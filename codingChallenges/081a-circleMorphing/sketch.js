/**
 * Implement one possible solution to Golan Levin's Circle Morphing challenge
 *
 * https://www.youtube.com/watch?v=mvgcNOX8JGQ
 */

let cirPath = []
let triPath = []

let spacing = 10
let theta = 0

function polarToCartesian (r, a) {
  return createVector(r * cos(a), r * sin(a))
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  let radius = 100
  let startA = 0
  let endA = 120
  let start = polarToCartesian(radius, startA)
  let end = polarToCartesian(radius, endA)
  for (let a = startA; a < 360; a += spacing) {
    let cv = polarToCartesian(radius, a)
    cirPath.push(cv)
    let amt = (a % 120) / (endA - startA)
    let tv = p5.Vector.lerp(start, end, amt)
    triPath.push(tv)

    if ((a + spacing) % 120 == 0) {
      startA += 120
      endA += 120
      start = polarToCartesian(radius, startA)
      end = polarToCartesian(radius, endA)
    }
  }
}

function draw() {
  background(0)

  translate(width/2, height/2)
  rotate(30)
  stroke(255)
  strokeWeight(6)
  noFill()

  let amt = (sin(theta) + 1) / 2
  theta += 1
  beginShape()
    for (let i = 0; i < cirPath.length; i++) {
      let cv = cirPath[i]
      let tv = triPath[i]
      let x = lerp(cv.x, tv.x, amt)
      let y = lerp(cv.y, tv.y, amt)
      vertex(x, y)
    }
  endShape(CLOSE)

 // Both figures for building/debugging
  beginShape()
    for (let i = 0; i < cirPath.length; i++) {
      let v = cirPath[i]
      vertex(v.x, v.y)
    }
  endShape(CLOSE)

  beginShape()
    for (let i = 0; i < triPath.length; i++) {
      let v = triPath[i]
      vertex(v.x, v.y)
    }
  endShape(CLOSE)
}
