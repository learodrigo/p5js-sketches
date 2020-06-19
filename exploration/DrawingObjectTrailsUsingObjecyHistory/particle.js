class Particle {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.history = []
  }

  update () {
    this.x += random(-random(8), random(8))
    this.y += random(-random(8), random(8))

    for (const pos of this.history) {
      pos.x += random(-2, 2)
      pos.y += random(-2, 2)
    }

    const v = createVector(this.x, this.y)
    this.history.push(v)
    if (this.history.length > 25) {
      this.history.splice(0, 1)
    }
  }

  show () {
    beginShape()
    for (const pos of this.history) {
      noFill()
      stroke(255)
      vertex(pos.x, pos.y)
    }
    endShape()

    noStroke()
    fill(255)
    ellipse(this.x, this.y, 4)
  }
}
