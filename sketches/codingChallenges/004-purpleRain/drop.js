class Drop {
  constructor () {
    this.x = random(width)
    this.y = random(-500, -50)
    this.z = random(20)
    this.len = map(this.z, 0, 20, 10, 20)
    this.ySpeed = map(this.z, 0, 20, 1, 20)
  }

  fall () {
    let grav = map(this.z, 0, 20, 0, 0.2)
    this.y += this.ySpeed
    this.ySpeed += grav

    if (this.y > height) {
      this.y = random(-500, -50)
      this.ySpeed = map(this.z, 0, 20, 4, 20)
    }
  }

  show () {
    let thick = map(this.z, 0, 20, 1, 3)
    strokeWeight(thick)
    stroke(138, 43, 226)
    line(this.x, this.y, this.x, this.y + this.len)
  }

}
