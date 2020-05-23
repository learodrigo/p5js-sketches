/**
 * Fractal Spirograph
 *
 * C.J.Chen's blog on Fractal Spirograph - http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html
 *
 */

// Speed(n) = k^(n-1), k=±2, ±3, ±4 being n the level depth
const K = -4
const RES = 50

let path = []
let end
let sun

function setup() {
  createCanvas(windowWidth, windowHeight)
  sun = new Orbit(width/2, height/2, 100, null, 0)
  let next = sun
  for (let i = 0; i < 11; i++) {
    next = next.addChild()
  }
  end = next
}

function draw() {
  background(0)

  for (let i = 0; i < RES; i++) {
    let next = sun
    while (next !== null) {
      next.update()
      next.show()
      next = next.child
    }
    path.push(createVector(end.x, end.y))
  }

  noFill()
  stroke(255, 0, 255)
  strokeWeight(1)
  beginShape()
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y)
  }
  endShape()
}
