class Boid {
  constructor () {
    this.pos = createVector(random(width), random(height))
    this.vel = p5.Vector.random2D()
    this.vel.setMag(random(4.5))
    this.acc = createVector()
    this.maxForce = 0.2
    this.maxSpeed = 3
  }

  forces (boids, force) {
    /* if bool === true, is align flock function
     * else is cohesion flock function
     */
    let steering = createVector()
    let perceptionRadius = 50
    let total = 0
    for (let b of boids) {
      let d = dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y)
      // Withing a radio and it's not me
      if (b !== this && d < perceptionRadius) {
        if (force === 'alignment') {
          // Go to the same direction
          steering.add(b.vel)
        } else if (force === 'cohesion') {
          // Go to avg point
          steering.add(b.pos)
        } else if (force === 'separation') {
          // Separate within a radius
          let diff = p5.Vector.sub(this.pos, b.pos)
          // The closer it is the higher will be the magnitude
          diff.div(d)
          steering.add(diff)
        }
        total++
      }
    }
    if (total) {
      steering.div(total)
      if (force === 'cohesion') {
        steering.sub(this.pos)
      }
      steering.setMag(this.maxSpeed)
      steering.sub(this.vel)
      steering.limit(this.maxForce)
    }

    return steering
  }

  edges () {
    if (this.pos.x > width) {
      this.pos.x = 0
    } else if (this.pos.x < 0) {
      this.pos.x = width
    }
    if (this.pos.y > height) {
      this.pos.y = 0
    } else if (this.pos.y < 0) {
      this.pos.y = height
    }
  }

  flock (boids) {
    // Applying forces alignment and cohesion
    let alignment = this.forces(boids, 'alignment')
    alignment.mult(alignmentSlider.value())
    this.acc.add(alignment)
    let cohesion = this.forces(boids, 'cohesion')
    cohesion.mult(cohesionSlider.value())
    this.acc.add(cohesion)
    let separation = this.forces(boids, 'separation')
    separation.mult(separationSlider.value())
    this.acc.add(separation)
  }

  update () {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    // Reseting vector
    this.acc.mult(0)
  }

  show () {
    stroke(255)
    strokeWeight(8)
    point(this.pos.x, this.pos.y)
  }
}
