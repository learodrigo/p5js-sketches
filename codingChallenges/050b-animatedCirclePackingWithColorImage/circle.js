class Circle {
  constructor (x, y, c) {
    this.r = 1
    this.growing = true
    this.x = x
    this.y = y
    this.color = c
  }

  edges () {
    return (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0)
  }

  grow () {
    if (this.growing) {
      this.r += 0.5
    }
  }

  show () {
    fill(this.color)
    noStroke()
    ellipse(this.x, this.y, this.r * 2)
  }
}
