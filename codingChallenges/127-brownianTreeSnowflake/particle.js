class Particle {
  constructor (x, y) {
    this.pos = createVector(x, y)
    this.r = 3
  }

  finished () {
    return this.pos.x < 1
  }

  intersects (snowflake) {
    let result = false
    for (let p of snowflake) {
      let d = dist(p.pos.x, p.pos.y, this.pos.x, this.pos.y)
      if (d < this.r * 2) {
        result = true
        break
      }
    }

    return result
  }

  update () {
    this.pos.x -= 1
    this.pos.y += random(-3, 3)

    let angle = this.pos.heading()
    angle = constrain(angle, 0, PI / 6)
    let magnitude = this.pos.mag()
    this.pos = p5.Vector.fromAngle(angle)
    this.pos.setMag(magnitude)
  }

  show () {
    fill(255, 50)
    noStroke()
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }
}
