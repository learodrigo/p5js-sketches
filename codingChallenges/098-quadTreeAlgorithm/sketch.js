/**
 * implement a Quadtree data structure in JavaScript and visualize
 *
 * https://en.wikipedia.org/wiki/Quadtree
 */

let qtree

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)

  let boundary = new Rectangle(0, 0, width, height)
  qtree = new QuadTree(boundary, 4)

  // Drawing points
  for (let i = 0; i < 500; i++) {
    let x = randomGaussian(width / 2, width / 8)
    let y = randomGaussian(height / 2, height / 8)
    let pt = new Point(x, y)
    qtree.insert(pt)
  }
}

function draw () {
  background(0)
  qtree.show()

  // Intersections
  push()
  noFill()
  stroke(255, 0, 200)
  rectMode(CENTER)
  let range = new Rectangle(mouseX, mouseY, 75, 23)
  rect(range.x, range.y, range.w * 2, range.h * 2)

  let points = qtree.query(range)
  for (let p of points) {
    stroke(255, 0, 0)
    strokeWeight(3)
    point(p.x, p.y)
  }

  pop()
}
