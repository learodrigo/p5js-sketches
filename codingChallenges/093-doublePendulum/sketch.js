/**
 * Simulate a "double pendulum"
 *
 * https://www.myphysicslab.com/pendulum/double-pendulum-en.html
 * Single pendulum - https://www.youtube.com/watch?v=9iaEqGOh5WM
 */

let r1, r2, m1, m2, a1, a2, a1_v, a2_v , buffer, g, px2, py2

function setup() {
  createCanvas(windowWidth, windowHeight)
  pixelDensity(1)

  buffer = createGraphics(width, height)
  // Copy of the background
  buffer.background(0)
  buffer.translate(width/2, 150)

  // Initializing
  r1 = 150
  r2 = 100
  m1 = 10
  m2 = 5
  a1 = PI/2
  a2 = PI/2
  a1_v = 0
  a2_v = 0
  g = 1
  px2 = 0
  py2 = 0
}

function draw() {
  background(0)
  imageMode(CORNER)
  image(buffer, 0, 0, width, height)

  // First calc
  let num1 = -g * (2 * m1 + m2) * sin(a1)
  let num2 = -m2 * g * sin(a1 - 2 * a2)
  let num3 = -2 * sin(a1 - a2) * m2
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2)
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2))

  let a1_a = (num1 + num2 + num3 * num4) / den

  // Second calc
  num1 = 2 * sin(a1 - a2)
  num2 = (a1_v * a1_v * r1 * (m1 + m2))
  num3 = g * (m1 + m2) * cos(a1)
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2)
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2))

  let a2_a = (num1 * (num2 + num3 + num4)) / den

  translate(width/2, 150)
  stroke(255)
  strokeWeight(2)

  // Polar to cartisean
  let x1 = r1 * sin(a1)
  let y1 = r1 * cos(a1)
  line(0, 0, x1, y1)
  ellipse(x1, y1, m1)

  // It's offset from x1,y1
  let x2 = x1 + r2 * sin(a2)
  let y2 = y1 + r2 * cos(a2)
  line(x1, y1, x2, y2)
  ellipse(x2, y2, m2)

  a1_v += a1_a
  a2_v += a2_a
  a1 += a1_v
  a2 += a2_v

  a1_v *= 0.9999
  a2_v *= 0.9999

  // Trace
  buffer.stroke(255)
  if (frameCount > 1) buffer.line(px2, py2, x2, y2)

  px2 = x2
  py2 = y2
}
