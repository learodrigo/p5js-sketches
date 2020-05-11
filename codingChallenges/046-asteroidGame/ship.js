class Ship {
  constructor () {
    this.fill = 255
    this.heading = 0
    this.isBoosting = false
    this.pos = createVector(width / 2, height / 2)
    this.r = 20
    this.rotation = 0
    this.vel = createVector(0, 0)
  }

  boost () {
    // Force to be apply for moving
    let force = p5.Vector.fromAngle(this.heading)
    // As we can keep the key press, it gets high velues
    force.mult(0.1)
    this.vel.add(force)
  }

  boosting (bool) {
    this.isBoosting = bool
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

  hits (asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
    return d < this.r + asteroid.r
  }

  // We handle this way to can keep pressing the key
  setRotation (angle) {
    this.rotation = angle
  }

  turn (angle) {
    this.heading += this.rotation
  }

  update () {
    if (this.isBoosting) {
      this.boost()
    }
    // Updating position
    this.pos.add(this.vel)
    // Adding friction
    this.vel.mult(0.99)
  }

  render () {
    // From push to pop, it saves the settings to be applied only there
    push()
    translate(this.pos)
    // As the triangle is pointing up, we sum 90DEG
    rotate(this.heading + HALF_PI)
    fill(this.fill)
    stroke(255)
    // Takes each x-y pair from its center
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    pop()
  }

  main () {
    ship.render()
    ship.turn()
    ship.update()
    ship.edges()
  }
}
