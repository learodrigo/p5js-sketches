/**
 * Attempt to make 3D Knots using Paul Bourke's formulae
 *
 * https://en.wikipedia.org/wiki/Knot_theory
 * http://paulbourke.net/geometry/knots/
 */

let angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
  background(0)
  rotateY(angle)
  rotateX(angle/2)

  angle += 0.01

  let beta = 0

  noFill()
  stroke(255)
  beginShape()
  while (beta < PI) {
    let r = (0.8 + 1.6 * sin(6 * beta)) * 100
    let theta = 2 * beta
    let phi =  0.6 * PI * sin(12 * beta)
    let x = r * cos(phi) * cos(theta)
    let y = r * cos(phi) * sin(theta)
    let z = r * sin(phi)

    vertex(x, y, z)
    beta += 0.01
  }
  endShape()
}
