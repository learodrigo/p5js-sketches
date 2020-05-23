/**
 * Minesweeper video game
 *
 * https://en.wikipedia.org/wiki/Minesweeper_(video_game)
 * https://en.wikipedia.org/wiki/Flood_fill
 */

let grid, cols, rows
let w = 40

let totalBees = 60

function setup() {
  createCanvas(500, 500)
  cols = floor(width / w)
  rows = floor(height / w)
  grid = make2dArray(cols, rows)

  // Creates the grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w)
    }
  }

  // Pick bees spots
  let options = []
  // Prevent to pick the same spot twice
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      options.push([i, j])
    }
  }

  for (let n = 0; n < totalBees; n++) {
    let index = floor(random(options.length))
    let choice = options[index]
    let i = choice[0]
    let j = choice[1]
    // Removes the option
    options.splice(index, 1)
    grid[i][j].bee = true
  }

  // Initialized the neighbors counter
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].countNeighbors()
    }
  }
}

function make2dArray (cols, rows) {
  let arr = new Array(cols)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if ( grid[i][j].contains(mouseX, mouseY) ) {
        grid[i][j].reveal()

        if (grid[i][j].bee) {
          gameOver()
        }
      }
    }
  }
}

function gameOver () {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].revealed = true
    }
  }
  result.innerHTML = 'Game over, refresh to restart'
}

function draw() {
  background(255)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show()
    }
  }
}
