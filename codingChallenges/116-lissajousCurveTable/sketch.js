/**
 * visualize a "Lissajous Curve Table"
 *
 * https://en.wikipedia.org/wiki/Lissajous_curve
 * https://twitter.com/panlepan/status/954694464697720833
 * https://twitter.com/juliomulero/status/1039456605736185856
 * conversion to p5js - https://www.youtube.com/watch?v=glDU8Nsyidg
 * Numerphille - https://www.youtube.com/watch?v=4CbPksEl51Q
 */

let angle = 0
let w = 40
let cols, rows
let curves

function make2DArray (rows, cols) {
  let arr = new Array(rows)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols)
  }
  return arr
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(15)
  cols = floor(width / w) - 1
  rows = floor(height / w) - 1
  curves = make2DArray(rows, cols)

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve()
    }
  }
}

function draw() {
  background(0)
  let d = w - 0.2 * w
  let r = d / 2

  noFill()
  stroke(255)
  for (let i = 0; i < cols; i++) {
    // Circles
    let cx = w + i * w + w / 2
    let cy = w / 2
    strokeWeight(1)
    stroke(255)
    ellipse(cx, cy, d, d)

    // Point on circles
    let x = r * cos(angle * (i + 1) - HALF_PI)
    let y = r * sin(angle * (i + 1) - HALF_PI)
    strokeWeight(4)
    stroke(255)
    point(cx + x, cy + y)

    // Lines
    stroke(255, 50)
    strokeWeight(1)
    line(cx + x, 0, cx + x, height)

    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x)
    }
  }

  noFill()
  stroke(255)
  for (let j = 0; j < rows; j++) {
    // Circles
    let cx = w / 2
    let cy = w + j * w + w / 2
    strokeWeight(1)
    stroke(255)
    ellipse(cx, cy, d)

    // Point on cirlces
    let x = r * cos(angle * (j + 1) - HALF_PI)
    let y = r * sin(angle * (j + 1) - HALF_PI)
    strokeWeight(4)
    stroke(255)
    point(cx + x, cy + y)

    // Lines
    stroke(255, 50)
    strokeWeight(1)
    line(0, cy + y, width, cy + y)

    for (let i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y)
    }
  }

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i].addPoint()
      curves[j][i].show()
    }
  }

  angle -= 0.1

  if (angle < -TWO_PI) {
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        curves[j][i].reset()
      }
    }

    angle = 0
  }
}
