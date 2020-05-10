class Rocket {
  constructor (dna) {
    this.acc = createVector()
    this.completed = false
    this.crashed = false
    this.dna = dna ? dna : new DNA()
    this.fitness = 0
    this.pos = createVector(width/2, height)
    this.vel = createVector()
  }

  applyForce (force) {
    this.acc.add(force)
  }

  calculateFitness () {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y)
    this.fitness = map(d, 0, width, width, 0)

    if (this.completed) {
      this.fitness *= 10
    }
    if (this.crashed) {
      this.fitness /= 10
    }
  }

  update () {
    // Check if it reaches the target
    let d = dist(this.pos.x, this.pos.y, target.x, target.y)
    if (d < TARGET_DIAMETER) {
      this.completed = true
      this.pos = target.copy()
      accuracy++
    }

    // Checks the obtacles and the view
    if (
        (this.pos.x > RX && this.pos.x < RX + RW &&
        this.pos.y > RY && this.pos.y < RY + RH) ||
        (this.pos.x > width || this.pos.x < 0) ||
        (this.pos.y > height || this.pos.y < -20)
       ) {
        this.crashed = true
    }

    // Makes the movement
    this.applyForce(this.dna.genes[count])
    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.mult(0)
      this.vel.limit(4)
    }
  }

  show () {
    push()
    fill(255, 100)
    noStroke()
    rectMode(CENTER)
    translate(this.pos.x, this.pos.y)
    rotate(this.vel.heading())
    rect(0, 0, 25, 5)
    pop()
  }
}
