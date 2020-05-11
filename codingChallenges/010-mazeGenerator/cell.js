class Cell {
  constructor (i, j)  {
    this.i = i
    this.j = j
    this.visited = false
    this.walls = {top: true, right: true, bottom: true, left: true}
  }

  checkNeighbors () {
    let neighbors = []
    let top    = grid[this.index( this.i    , this.j - 1 )]
    let right  = grid[this.index( this.i + 1, this.j     )]
    let bottom = grid[this.index( this.i    , this.j + 1 )]
    let left   = grid[this.index( this.i - 1, this.j     )]

    if (top && !top.visited) {
      neighbors.push(top)
    }
    if (right && !right.visited) {
      neighbors.push(right)
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom)
    }
    if (left && !left.visited) {
      neighbors.push(left)
    }

    if (neighbors.length) {
      let r = floor(random(0, neighbors.length))
      return neighbors[r]
    } else {
      return undefined
    }
  }

  highlight () {
    let x = this.i * w
    let y = this.j * w
    noStroke()
    fill(0, 255, 0)
    rect(x, y, w, w)
  }

  index (i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
      return -1
    }
    return i + j  * cols
  }

  show () {
    let x = this.i * w
    let y = this.j * w

    stroke(255)
    // top left - right
    if (this.walls.top) line(x, y, x + w, y)
    // right top - bottom
    if (this.walls.right) line(x + w, y, x + w, y + w)
    // bottom right - left
    if (this.walls.bottom) line(x + w, y + w, x, y + w)
    // left bottom - top
    if (this.walls.left) line(x, y + w, x, y)

    if (this.visited) {
      fill(255, 0, 255, 100)
      noStroke()
      rect(x, y, w, w)
    }
  }
}
