// CHECK THE 1ER FOR CHANGING CONST VALUES
// http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
// https://en.wikipedia.org/wiki/Phyllotaxis
// https://bl.ocks.org/mbostock/11463507
// http://algorithmicbotany.org/

const GOLDEN_ANGLE =  137.5

// is a scaling value
let c = 4
let n = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  colorMode(HSB)
  background(0)
  noStroke()
}

function draw() {
  let a = n * GOLDEN_ANGLE
  let r = c * sqrt(n)
  // We add to calculate from the middle of the canvas
  let x = r * cos(a) + width / 2
  let y = r * sin(a) + height / 2

  // fill(255)
  fill(n % 256, 255, 255)
  // fill(a % 256, 255, 255)
  // fill((a * 180 / PI - r) % 255, 255, 255)
  ellipse(x, y, 4, 4)

  n++
}
