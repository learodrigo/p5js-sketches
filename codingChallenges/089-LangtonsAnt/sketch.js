/**
 * Implement Langton's Ant
 *
 * https://en.wikipedia.org/wiki/Langton%27s_ant
 * https://www.youtube.com/watch?v=NWBToaXK5T0
 */

const ANTUP = 0
const ANTRIGHT = 1
const ANTDOWN = 2
const ANTLEFT = 3

let grid
let x
let y
let dir

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)

  grid = make2DArray(width, height)
  // Location of the ant at the begining
  x = width/2
  y = height/2
  dir = ANTUP
}

function draw() {
  for (let n = 0; n < 100; n++) {
    let state = grid[x][y]
    if (state == 0) {
      turnRight()
      grid[x][y] = 1
      stroke(255)
    } else if (state == 1) {
      turnLeft()
      grid[x][y] = 0
      stroke(0)
    }
    point(x, y)
    moveForward()
  }
}

function moveForward () {
  switch (dir) {
    case ANTUP:
      y--
      break
    case ANTRIGHT:
      x++
      break
    case ANTDOWN:
      y++
      break
    case ANTLEFT:
      x--
      break
  }

  if (x > width - 1) {
    x = 0
  } else if (x < 0) {
    x = width - 1
  }

  if (y > height - 1) {
    y = 0
  } else if (y < 0) {
    y = height - 1
  }
}

function turnRight () {
  dir++
  if (dir > ANTLEFT) {
    dir = ANTUP
  }
}

function turnLeft () {
  dir--
  if (dir < ANTUP) {
    dir = ANTLEFT
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0
    }
  }
  return arr
}
