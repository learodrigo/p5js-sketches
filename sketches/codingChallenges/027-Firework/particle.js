class Particle {
  constructor (x, y, hu,  firework = false) {
    this.acc = createVector(0, 0)
    this.firework = firework
    this.hu = hu
    this.lifespan = 255
    this.pos = createVector(x, y)

    if (this.firework) {
      this.vel = createVector(0, random(-13, -8))
    } else {
      this.vel = p5.Vector.random2D()
      this.vel.mult(random(2, 6))
    }
  }

  applyForce (force) {
    this.acc.add(force)
  }

  done () {
    return this.lifespan < 0
  }

  update () {
    if (!this.firework) {
      this.vel.mult(0.9)
      this.lifespan -= 4

    }
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  show () {
    if (!this.firework) {
      strokeWeight(2)
      stroke(this.hu, 255, 255, this.lifespan)
    } else {
      strokeWeight(4)
      stroke(this.hu, 255, 255)
    }
    point(this.pos.x, this.pos.y)
  }

}
