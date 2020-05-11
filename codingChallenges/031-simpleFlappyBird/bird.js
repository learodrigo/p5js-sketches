class Bird {
  constructor () {
    this.diameter = 32
    this.gravity = 0.6
    this.lift = -20
    this.velocity = 0
    this.x = width / 6
    this.y = height / 2
  }

  show () {
    fill(255)
    noStroke()
    ellipse(this.x, this.y, this.diameter)
  }

  up() {
    // The lift is a negative number 'cause we go to y = 0
    this.velocity += this.lift
  }

  update () {
    this.velocity += this.gravity
    // Add air resistence
    this.velocity *= 0.9
    this.y += this.velocity

    // Stuck on the bottom or top
    if (this.y > height - this.diameter / 2) {
      this.y = height - this.diameter / 2
      this.velocity = 0
    } else if (this.y < this.diameter / 2) {
      this.y = this.diameter / 2
      this.velocity = 0
    }
  }

  main() {
    this.update()
    this.show()
  }
}
