class Spot {
  constructor (x, y) {
    this.f = 0
    this.g = 0
    this.h = 0
    this.neighbors = []
    this.previous = undefined
    this.wall = random(1) < 0.3 ? true : false
    this.i = x
    this.j = y
  }

  addNeighbors (grid) {
    let i = this.i
    let j = this.j
    // To prevent edge cases
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j])
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j])
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1])
    }
    if (j > 0) {
      this.neighbors.push(grid[i][ j - 1])
    }
    // Diagonals
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1])
    }
    if (i < cols - 1 && j < rows - 1) {
      this.neighbors.push(grid[i + 1][j + 1])
    }
    if (i < cols - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][ j - 1])
    }
    if (i > 0 && j < rows - 1) {
      this.neighbors.push(grid[i - 1][ j + 1])
    }
  }

  show (color) {
    let f = this.wall ? 0 : color
    fill(f)
    stroke(0)
    // Substract 1 to see the full grid
    // rect(this.i * w + w/2, this.j * h + h/2, w, h)
    ellipse(this.i * w + w/2, this.j * h + h/2, w/2, h/2)
  }
}
