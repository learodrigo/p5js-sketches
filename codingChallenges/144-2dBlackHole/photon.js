class Photon {
  constructor (x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(-c, 0)
    this.history = []
    this.color = color(255, 5, 0)
    this.stopped = false
  }

  update () {
    if (this.stopped) return

    const deltaV = this.vel.copy()
    deltaV.mult(dt)
    this.pos.add(deltaV)

    this.history.push(this.pos.copy())

    if (this.history.length > 500) {
      this.history.splice(0, 1)
    }
  }

  stop () {
    this.stopped = true
  }

  show () {
    stroke(this.color)
    strokeWeight(4)
    point(this.pos.x, this.pos.y)

    stroke(255, 10, 0)
    strokeWeight(1)
    noFill()

    beginShape()
      this.history.forEach(h => vertex(h.x, h.y))
    endShape()
  }
}
