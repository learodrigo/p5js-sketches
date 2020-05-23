class Bit {
  constructor (x, y, diam) {
    this.x = x
    this.y = y
    this.diameter = diam
    this.state = false
  }

  toggle (x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.diameter / 2) {
      this.state = !this.state
    }
  }

  setState (s) {
    // As it's a char, we parse a number to bool
    this.state = Boolean(parseInt(s))
  }

  show () {
    stroke(255)
    strokeWeight(4)
    if (this.state) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(this.x, this.y, this.diameter)
  }
}
