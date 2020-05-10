class Blob {
  constructor(x, y) {
    this.pos = createVector(x, y)
    let angle = random(TWO_PI)
    this.xSpeed = random(2, 5) * Math.cos(angle)
    this.ySpeed = random(2, 5) * Math.sin(angle)
    this.r = random(100, 300)
  }

  update() {
    this.pos.x += this.xSpeed
    this.pos.y += this.ySpeed
    if (this.pos.x > width || this.pos.x < 0) {
      this.xSpeed *= -1
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.ySpeed *= -1
    }
  }

  show() {
    noFill()
    noStroke(0)
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }

  main () {
    this.update()
    this.show()
  }
}
