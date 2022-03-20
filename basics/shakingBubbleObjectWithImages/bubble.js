class Bubble {
  constructor(x, y, r = 50, img = undefined) {
    this.x = x
    this.y = y
    this.r = r
    this.xSpeed = 4
    this.ySpeed = -3
    this.brightness = 0
    this.img = img
  }

  moveBall() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }

  moveRandom() {
    this.x += random(-5, 5) / this.xSpeed
    this.y += random(-5, 5) / this.ySpeed
  }

  displayLineBall() {
    stroke(255)
    strokeWeight(0.4)
    fill(this.brightness, 100)
    ellipse(this.x, this.y, this.r * 2)
  }

  displayAlphaBall() {
    noStroke()
    fill(255, 75)
    ellipse(this.x, this.y, this.r * 2)
  }

  displayImage() {
    image(this.img, this.x, this.y, this.r, this.r)
  }

  bounceBall() {
    if (this.x + this.r > width || this.x - this.r < 0) {
      this.xSpeed *= -1
    }

    if (this.y + this.r > height || this.y - this.r < 0) {
      this.ySpeed *= -1
    }
  }

  onHover(_x, _y) {
    let d = dist(_x, _y, this.x, this.y)
    return d < this.r
  }

  changeColor(bright) {
    this.brightness = bright
  }

  onClicked(_x, _y) {
    let d = dist(_x, _y, this.x, this.y)
    this.brightness = d < this.r ? 255 : 0
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return d < this.r + other.r
  }
}
