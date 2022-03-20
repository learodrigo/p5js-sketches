/**
 * Attempt to code Conway's Game of Life cellular automata simulation
 *
 * https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * http://www.ibiblio.org/lifepatterns/october1970.html
 * Nature of code - https://www.youtube.com/watch?v=tENSCEO-LEc
 */

let grid

let cols
let rows
let res = 4

function make2DArray(cols, rows) {
  let arr = new Array(cols)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr
}

function countNeighbors(grid, x, y) {
  let sum = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols
      let row = (y + j + rows) % rows

      sum += grid[col][row]
    }
  }
  // Substract myself
  sum -= grid[x][y]
  return sum
}

function setup() {
  createCanvas(840, 640)
  cols = width / res
  rows = height / res

  grid = make2DArray(cols, rows)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2))
    }
  }
}

function draw() {
  background(0)

  //Render
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * res
      let y = j * res
      if (grid[i][j] == 1) {
        fill(255)
        stroke(0, 51)
        rect(x, y, res - 1, res - 1)
      }
    }
  }

  // Compute next based on grid
  let next = make2DArray(cols, rows)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j]

      // Count live neighbors
      let neighbors = countNeighbors(grid, i, j)

      // Rules
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0
      } else {
        next[i][j] = state
      }
    }
  }

  grid = next
}
