class Asteroid {
  constructor (pos, r) {
    // When collision, we split into 2, so we need the current position
    this.pos = pos ? pos.copy() : createVector(random(width), random(height))
    this.fill = random(255)
    this.offset = []
    // Radius
    this.r = r ? r / 2 : random(5, 40)
    this.total = floor(random(5, 15))
    this.vel = p5.Vector.random2D()

    for (let i = 0; i < this.total; i++) {
      this.offset[i] = random(-this.r / 2, this.r / 2)
    }
  }

  breakup () {
    return [
      new Asteroid(this.pos, this.r),
      new Asteroid(this.pos, this.r)
    ]
  }

  edges () {
    // Checking horizontally
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r
    } else if (this.pos.x < -this.r) {
      this.pos.x = width
    }
    // Checking vertically
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r
    } else if (this.pos.y < -this.r) {
      this.pos.y = height
    }
  }

  render () {
    push()
    noFill()
    stroke(255)
    translate(this.pos.x, this.pos.y)
    // In order to make different shapes with the same object,
    // we will transform polar to coordinates, so we will manage
    // each ellipse as a poligon. Check video on top
    beginShape()
      for (let i = 0; i < this.total; i++) {
        let angle = map(i, 0, this.total, 0, TWO_PI)
        let r = this.r + this.offset[i]
        let x = r * cos(angle)
        let y = r * sin(angle)
        vertex(x, y)
      }
    endShape(CLOSE)
    pop()
  }

  update () {
    this.pos.add(this.vel)
  }

  main () {
    this.render()
    this.update()
    this.edges()
  }
}
