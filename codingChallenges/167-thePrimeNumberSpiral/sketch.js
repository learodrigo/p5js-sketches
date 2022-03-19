const STEP_SIZE = 5

let x, y, px, py
let step = 1
let numSteps = 1
let state = 0
let turnCount = 1
let totalSteps

const isPrime = (num) => {
  if (num === 1 || (num != 2 && num % 2 === 0)) return false

  for (let i = 3; i <= sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

function setup() {
  height = windowHeight
  width = windowWidth

  createCanvas(windowWidth, windowHeight)
  background(0)

  const cols = width / STEP_SIZE - 1
  const rows = height / STEP_SIZE - 1

  totalSteps = cols * rows

  x = width / 2
  y = height / 2

  px = x
  py = y
}

function draw() {
  stroke(255, 50)
  line(px, py, x, y)

  if (isPrime(step)) {
    fill(255)
    noStroke()
    circle(x, y, STEP_SIZE)
  }

  px = x
  py = y

  switch (state) {
    case 0:
      x += STEP_SIZE
      break
    case 1:
      y -= STEP_SIZE
      break
    case 2:
      x -= STEP_SIZE
      break
    case 3:
      y += STEP_SIZE
      break
  }

  if (step % numSteps === 0) {
    state = (state + 1) % 4

    if (++turnCount % 2 === 0) {
      numSteps++
    }
  }

  step++

  if (totalSteps < step) noLoop()
}
