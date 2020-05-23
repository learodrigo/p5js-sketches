/**
 * attempt to animate the path of the classic "space filling curve" known as the Hilbert Curve.
 *
 * https://en.wikipedia.org/wiki/Hilbert_curve
 * https://marcin-chwedczuk.github.io/iterative-algorithm-for-drawing-hilbert-curve
 * https://github.com/processing/processing4
 * https://www.youtube.com/watch?v=3s7h2MHQtxc
 * https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown
 * https://www.youtube.com/watch?v=RU0wScIj36o
 * MDN bitwise - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
 */

const order = 8
const N = Math.pow(2, order)
const total = N * N
let invert = -1

let path = new Array(total)

let counter = 0

function setup() {
  createCanvas(windowHeight, windowHeight)
  colorMode(HSB, 360, 255, 255)
  background(0)

  for (let i = 0; i < total; i++) {
    path[i] = hilbert(i)
    let len = width / N
    path[i].mult(len)
    path[i].add(len / 2, len / 2)
  }
}

function draw() {
  // Path
  stroke(360)
  noFill()
  beginShape()
  for (let i = 1; i < counter; i++) {
    if (path[i]) {
      // let h = map(i, 0, path.length, 0, 255)
      // stroke(h, 255, 255)
      // line(path[i].x, path[i].y, path[i + 1].x, path[i + 1].y)
      vertex(path[i].x, path[i].y)
    } else {
      print('Done')
      noLoop()
    }
  }
  endShape()

  counter+=order

  // Debugging points
  // strokeWeight(4)
  // for (let i = 0; i < path.length; i++) {
  //   point(path[i].x, path[i].y)
  // }
}


function hilbert(i) {
  let points = [
    createVector(0, 0),
    createVector(0, 1),
    createVector(1, 1),
    createVector(1, 0),
  ]


  // Bitmasking
  let index = i & 3
  let v = points[index]

  // Recursion masking
  for (let j = 1; j < order; j++) {
    let len = pow(2, j)

    // Bit shifting
    i = i >>> 2
    index = i & 3

    // Swaping positions
    if (index === 0) {
      let temp = v.x
      v.x = v.y
      v.y = temp
    } else if (index === 1) {
      v.y += len
    } else if (index === 2) {
      v.x += len
      v.y += len
    } else if (index === 3) {
      let temp = len - 1 - v.x
      v.x = len - 1 - v.y
      v.y = temp

      v.x += len
    }
  }

  return v
}
