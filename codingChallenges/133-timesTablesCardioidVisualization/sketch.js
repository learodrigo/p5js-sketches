const pointsWeight = 1
let factor = 0
let r

function setup() {
  createCanvas(windowWidth, windowHeight)
  r  = height/2 - 24
}

function draw() {
  background(20)
  let totalPoints = 200

  factor += 0.005

  translate(width/2, height/2)

  stroke(255)
  noFill()
  circle(0, 0, r*2)
  strokeWeight(10)
  circle(0, 0, r*1.5)
  strokeWeight(1)

  for (let i = 0; i < totalPoints; i++) {
    let v = getVector(i, totalPoints)
    fill(255)
    circle(v.x, v.y, pointsWeight)
  }

  for (let i = 0; i < totalPoints; i++) {
    let a = getVector(i, totalPoints)
    let b = getVector(i * factor, totalPoints)
    strokeWeight(0.5)
    line(a.x, a.y, b.x, b.y)
  }

}

function getVector (index, totalPoints) {
  let angle = map(index % totalPoints, 0, totalPoints, 0, TWO_PI)
  // Adding Pi flips it
  let v = p5.Vector.fromAngle(angle + PI)
  v.mult(r)
  return v
}
