class BlackHole {
  constructor (x, y, m) {
    this.pos = createVector(x, y)
    this.mass = m
    this.rs = (2 * G * this.mass) / (c * c)
  }

  pull (photon) {
    const force = p5.Vector.sub(this.pos, photon.pos)
    const r = force.mag()
    const fg = G * this.mass / (r * r)

    force.setMag(fg)

    photon.vel.add(force)
    photon.vel.setMag(c)

    if (r < this.rs) {
      photon.stop()
    }
  }

  show () {
    const { x, y } = this.pos

    fill(0, 200)
    noStroke()
    circle(x, y, this.rs)

    noFill()
    const sw = 64

    stroke(100, 100)
    strokeWeight(sw)
    circle(x, y, this.rs * 3 + sw / 2)

    stroke(255, 50, 0)
    strokeWeight(sw / 2)
    circle(x, y, this.rs * 1.5 + sw / 4)
  }
}
