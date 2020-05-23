/**
 * implement the "Chaos Game" in the p5.js web editor. It uses three seed points and results in the famous Sierpinski Triangle
 *
 * https://www.thinkercon.com/
 * https://www.algorithm-archive.org/
 * https://en.wikipedia.org/wiki/Chaos_game
 * Numerphile - https://www.youtube.com/watch?v=kbKtFN71Lfs
 */

// Number of fix points
const FIX_POINTS = 5

// Starting points
let points
// Drawing point
let current

let previous
let percent = 0.6

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)

  points = []
  for (let i = 0; i < FIX_POINTS; i++) {
    // Circle
    let angle = i * TWO_PI / FIX_POINTS
    let v = p5.Vector.fromAngle(angle)
    v.mult(height / 2)
    v.add(width / 2, height / 2)
    // Random
    // let v = createVector(random(width), random(height))
    points.push(v)
  }

  reset()
}

function reset () {
  // Drawing point
  let x = random(width)
  let y = random(height)
  current = createVector(x, y)
}

function drawSequence () {
  stroke(255, 100)
  strokeWeight(1)
  let next = random(points)

  if (next !== previous) {
    current.x = lerp(current.x, next.x, percent)
    current.y = lerp(current.y, next.y, percent)
    point(current.x, current.y)
  }

  previous = next
}

function draw() {
  for (let i = 0; i < 100; i++) {
    drawSequence()
  }
}
