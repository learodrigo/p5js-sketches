const CIRCLE_RADIUS = 150
const PREC_POINTS = 0.03
const X_OFFSET = 0.1
const Y_OFFSET = 0.01

let yoff = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  background(0)
  translate(width / 2, height / 2)

  beginShape()
    // This change by PREC_POINT
    let xoff = 0
    for (let angle = 0; angle <= TWO_PI; angle += PREC_POINTS) {
      let offset = map(noise(xoff, yoff), 0, 1, -10, 10)
      let r = CIRCLE_RADIUS + offset
      let x = r * cos(angle)
      let y = r * sin(angle)
      vertex(x, y)
      xoff += X_OFFSET
    }
  endShape(CLOSE)

  // This changes over time
  yoff += Y_OFFSET
}
