class Laser {
  constructor (shipPos, angle) {
    this.pos = createVector(shipPos.x, shipPos.y)
    this.vel = p5.Vector.fromAngle(angle)
  }

  hits (asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
    return d < asteroid.r
  }

  offscreen () {
    return (this.pos.x > width) || (this.pos.x < 0) || (this.pos.y > height) || (this.pos.y < 0)
  }

  render () {
    push()
    stroke(255)
    strokeWeight(4)
    point(this.pos)
    pop()
  }

  update () {
    // Making the bullet velocity faster
    this.vel.mult(1.3)
    this.pos.add(this.vel)
  }

  main () {
    this.update()
    this.render()
  }
}
