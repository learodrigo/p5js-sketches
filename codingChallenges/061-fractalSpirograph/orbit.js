class Orbit {
  constructor (x, y, r, p, n) {
    this.x = x
    this.y = y
    this.r = r
    this.parent = p
    this.child = null
    this.angle = -PI/2
    this.n = n
    this.speed = radians(pow(K, this.n - 1)) / RES
  }

  addChild () {
    let newR = this.r / 3
    let newX = this.x + this.r + newR
    let newY = this.y
    this.child = new Orbit(newX, newY, newR, this, this.n + 1)
    return this.child
  }

  update () {
    if (!this.parent) {
      return
    }
    this.angle += this.speed
    let rsum = this.r + this.parent.r
    // let rsum = this.r - this.parent.r // Circle inside
    this.x = this.parent.x + rsum * cos(this.angle)
    this.y = this.parent.y + rsum * sin(this.angle)
    // ellipse(x2, y2, r2*2)
  }

  show () {
    push()
      noFill()
      stroke(255)
      strokeWeight(0.5)
      ellipse(this.x, this.y, this.r * 2)
    pop()
  }
}
