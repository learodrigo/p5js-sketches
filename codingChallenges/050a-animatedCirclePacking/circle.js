class Circle {
  constructor (x, y) {
    this.r = 1
    this.growing = true
    this.x = x
    this.y = y
  }

  edges () {
    return (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0)
  }

  grow () {
    this.r += this.growing ? 1 : 0
  }

  show () {
    noFill()
    stroke(255)
    ellipse(this.x, this.y, this.r * 2)
  }
}
