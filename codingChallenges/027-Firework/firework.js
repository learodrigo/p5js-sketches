class Firework {
  constructor () {
    this.exploded = false
    this.hu = random(255)
    this.firework = new Particle(random(width), height, this.hu, true)
    this.particles = []
  }

  done () {
    return (this.exploded && !this.particles.length)
  }

  explode () {
    for (let i = 0; i < 100; i++) {
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false)
      this.particles.push(p)
    }
  }

  update () {
    if (!this.exploded) {
      this.firework.applyForce(gravity)
      this.firework.update()

      if (this.firework.vel.y >= 0) {
        this.exploded = true
        this.explode()
      }
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity)
      this.particles[i].update()
      if (this.particles[i].done()) {
        this.particles.splice(i, 1)
      }
    }
  }

  show () {
    if (!this.exploded) {
      this.firework.show()
    }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show()
    }
  }

}
