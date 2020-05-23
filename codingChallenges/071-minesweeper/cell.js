class Cell {
  constructor (i, j, w) {
    this.i = i
    this.j = j
    this.x = i * w
    this.y = j * w
    this.w = w
    this.neighborCount = 0

    this.bee = false//random(1) < 0.5 ? true : false
    this.revealed = false
  }

  contains (x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
  }

  countNeighbors () {
    if (this.bee) {
      this.neighborCount = -1
      return
    }

    let total = 0
    for (let xOff = -1; xOff <= 1; xOff++) {
      for (let yOff = -1; yOff <= 1; yOff++) {
        let _i = this.i + xOff
        let _j = this.j + yOff

        if (_i > -1 && _i < cols && _j > -1 && _j < rows) {
          let neighbor = grid[_i][_j]
          if (neighbor.bee) {
            total++
          }
        }
      }
    }

    this.neighborCount = total
  }

  reveal () {
    this.revealed = true
    if (this.neighborCount == 0) {
      this.floodFill()
    }
  }

  floodFill () {
    for (let xOff = -1; xOff <= 1; xOff++) {
      for (let yOff = -1; yOff <= 1; yOff++) {
        let _i = this.i + xOff
        let _j = this.j + yOff

        if (_i > -1 && _i < cols && _j > -1 && _j < rows) {
          let neighbor = grid[_i][_j]
          if (!neighbor.bee && !neighbor.revealed) {
            neighbor.reveal()
          }
        }
      }
    }
  }

  show () {
    push()
      noFill()
      stroke(0)
      rect(this.x, this.y, this.w, this.w)

      if (this.revealed) {
        if (this.bee) {
          fill(51)
          translate(this.w / 2, this.w / 2)
          ellipse(this.x, this.y, this.w * 0.5)
        } else {
          translate(this.w / 2, this.w / 2)
          textAlign(CENTER, CENTER)
          if (this.neighborCount > 0) {
            fill(0)
            text(this.neighborCount, this.x, this.y)
          }
        }
      }
    pop()
  }
}
