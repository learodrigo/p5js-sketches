/**
 * implement the "Gift Wrapping algorithm" (aka Jarvis march) for calculating a convex hull in JavaScript. This is a foundational topic in computational geometry
 * https://en.wikipedia.org/wiki/Gift_wrapping_algorithm
 * https://en.wikipedia.org/wiki/Cross_product
 * https://www.youtube.com/watch?v=mrYMzpbFz18
 */

const points = []
const hull = []

// Starting point
let leftMost
// The current and next vertex of the hull
let index = 0
let nextIndex = -1
let nextVertex
// The checked point
let currentPoint

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 100; i++) {
    points.push(createVector(random(width), random(height)))
  }

  points.sort((a, b) => a.x - b.x)
  leftMost = points[0]
  currentVertex = leftMost
  hull.push(currentVertex)
  nextVertex = points[1]
  index = 2
}

function draw() {
  background(0)

  stroke(255)
  strokeWeight(4)

  // Drawing the lines
  for (let p of points) {
    point(p.x, p.y)
  }

  // Drawing the hull
  stroke(255, 0, 200)
  fill(255, 0, 200, 50)
  beginShape()
  for (let p of hull) {
    vertex(p.x, p.y)
  }
  endShape()

  // Starting point
  stroke(0, 255, 0)
  strokeWeight(24)
  point(leftMost.x, leftMost.y)

  // Current point
  stroke(255, 0, 200)
  strokeWeight(16)
  point(currentVertex.x, currentVertex.y)

  // Assumption of second point
  stroke(0, 255, 0)
  strokeWeight(2)
  line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y)

  // Current point that is being checked
  let checking = points[index]
  stroke(255, 100)
  line(currentVertex.x, currentVertex.y, checking.x, checking.y)

  // Cross product fuction
  const a = p5.Vector.sub(nextVertex, currentVertex)
  const b = p5.Vector.sub(checking, currentVertex)
  const crossProduct = a.cross(b)

  if (crossProduct.z < 0) {
    nextVertex = checking
    nextIndex = index
  }

  // Go to next one
  index++

  // When the last is the current checking
  if (index === points.length) {
    if (nextVertex === leftMost) {
      // Exit condition
      print('Done')
      noLoop()
    } else {
      // Updating
      hull.push(nextVertex)
      currentVertex = nextVertex
      index = 0
      nextVertex = leftMost
    }
  }
}
