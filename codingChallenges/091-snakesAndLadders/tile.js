class Tile {
  constructor (_x, _y, _wh, _index, _next) {
    this.x = _x
    this.y = _y
    this.wh = _wh
    this.index = _index
    this.snadders = 0
    this.color = (this.index % 2) ? 100 : 200
  }

  getCenter () {
    let cx = this.x + this.wh/2
    let cy = this.y + this.wh/2
    return createVector(cx, cy)
  }

  highlight () {
    push()
      fill(0, 255, 0, 100)
      noStroke()
      rect(this.x, this.y, this.wh, this.wh)
    pop()
  }

  showSnadders () {
    push()
      if (this.snake !== 0) {
        let myC = this.getCenter()
        let nextC = tiles[this.index + this.snadders].getCenter()
        strokeWeight(4)
        if (this.snadders < 0) {
          stroke(255, 150, 200)
        } else {
          stroke(0)
        }
        line(myC.x, myC.y, nextC.x, nextC.y)
      }
    pop()
  }

  show () {
    push()
      fill(this.color)
      noStroke()
      rect(this.x, this.y, this.wh, this.wh)
    pop()
  }
}
