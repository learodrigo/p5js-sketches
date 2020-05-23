class Particle {
  constructor (x, y) {
    this.acc = createVector()
    this.prev = createVector(x, y)
    this.pos = createVector(x, y)
    this.vel = createVector()
    // this.vel = p5.Vector.random2D()
    // Random magnitude makes this more chaotic
    // this.vel.setMag(random(2, 5))
  }

  attracted (target) {
    // This returns a vector with the difference of this 2 vectors
    let force = p5.Vector.sub(target, this.pos)
    // Distance squared
    // let dsQuared = force.magSq()
    let dsQuared = force.mag()
    // Once the particle is close, the force is so big, that it explodes
    // It's like when in Apollo, they have to calculate the travel
    // round the Moon to spin to the Earth
    dsQuared = constrain(dsQuared, 5, 50)
    // Created a repulsion area
    if (dsQuared < 20) {
      force.mult(-10)
    }
    // Universival gravitational constant
    let UGC = 1//6.67408
    let strength = UGC / (dsQuared*dsQuared)
    // This sets the length of my vector
    force.setMag(strength)
    // And we need to reset acceleration to zero when updating
    this.acc.add(force)
  }

  update () {
    // Velocity is an arrow that tells the position where to go
    // Acceleration which tell the position what to do (turn, slow)
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    // To prevent the acceleration gets crazy with the force
    this.acc.mult(0)
  }

  show () {
    push()
      noFill()
      stroke(255, 5)
      line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    pop()

    // Setting previous values
    this.prev.x = this.pos.x
    this.prev.y = this.pos.y
  }
}
