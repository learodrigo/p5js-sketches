class Blob {
  // Defaults values are for the player
  constructor (x, y, r) {
    this.pos = createVector(x, y)
    this.r = r
    this.vel = createVector(0, 0)
  }

  eats (other) {
    let d = p5.Vector.dist(this.pos, other.pos)
    if (d < this.r + other.r) {
      // Sumarizing both areas
      let sum = PI * this.r * this.r + PI * other.r * other.r
      this.r = sqrt(sum / PI)
      return true
    } else {
      return false
    }
  }

  show () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }

  update () {
    let newVel = createVector(mouseX - width / 2, mouseY - height / 2)
    newVel.setMag(3)
    this.vel.lerp(newVel, 0.2)
    this.pos.add(this.vel)
  }
}
