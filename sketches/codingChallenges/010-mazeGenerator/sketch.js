// https://en.wikipedia.org/wiki/Maze_generation_algorithm
// #Recursive_backtracker

const w = 20

let cols
let current
let grid = []
let rows
let stack = []

function setup() {
  createCanvas(600, 400)
  cols = floor(width / w)
  rows = floor(height / w)

  // frameRate(20)

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j)
      grid.push(cell)
    }
  }

  current = grid[0]
}

function draw() {
  background(0)
  for (let i = 0; i < grid.length; i++) {
    grid[i].show()
  }

  current.visited = true
  current.highlight()

  // Pick a random direction
  var next = current.checkNeighbors()
  if (next) {
    next.visited = true
    // Stack the trace
    stack.push(current)
    // Trace the line removing walls
    removeWalls(current, next)
    // Update head
    current = next
  } else if (stack.length) {
    current = stack.pop()
  }
}

function removeWalls (a, b) {
  let x = a.i - b.i
  if (x === 1) {
    a.walls.left = false
    b.walls.right = false
  } else if (x === -1) {
    a.walls.right = false
    b.walls.left = false
  }

  let y = a.j - b.j
  if (y === 1) {
    a.walls.top = false
    b.walls.bottom = false
  } else if (y === -1) {
    a.walls.bottom = false
    b.walls.top = false
  }
}
