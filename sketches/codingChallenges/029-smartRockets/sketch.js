const LIFESPAN = 400
const MAX_FORCE = 0.2
const ROCKETS  = 500
const RX = 200
const RY = 150
const RW = 200
const RH = 10
const TARGET_DIAMETER = 16

let accuracy = 0
let count = 0
let lifeP
let lifeP2
let population
let target

function setup() {
  createCanvas(600, 400)
  population = new Population()
  lifeP = createP()
  lifeP2 = createP()
  target = createVector(width/2, 50)
}

function draw() {
  background(0)
  population.run()
  lifeP.html('Frame #' + count)
  lifeP2.html('Hits ' + accuracy)

  // Here we reset the counters and update the DNAs
  count++
  if (count === LIFESPAN) {
    population.evaluate()
    population.selection()
    count = 0
  }
  accuracy = 0

  // Obstacle and target
  rect(RX, RY, RW, RH)
  ellipse(target.x, target.y, TARGET_DIAMETER)
}
