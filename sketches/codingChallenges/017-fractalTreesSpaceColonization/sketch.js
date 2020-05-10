/**
 * Fractal tree with space colonization algorithm
 *
 * http://algorithmicbotany.org/
 * http://algorithmicbotany.org/papers/colonization.egwnp2007.html
 *
 */

const LEAVES = 500

let tree

let minDist = 10
let maxDist = 50

function setup() {
  createCanvas(windowWidth, windowHeight)
  tree = new Tree()
}

function draw() {
  background(0)
  tree.show()
  tree.grow()
}
