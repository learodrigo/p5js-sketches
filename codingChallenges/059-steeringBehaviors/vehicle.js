class Vehicle {
  constructor (x, y) {
    this.acc = createVector()
    this.maxForce = 0.8
    this.maxSpeed = 5
    this.pos = createVector(random(width), random(height))
    this.r = 8
    this.target = createVector(x, y)
    this.vel = p5.Vector.random2D()
  }

  applyForce (f) {
    this.acc.add(f)
  }

  arrive (target) {
    let desired = p5.Vector.sub(target, this.pos)
    let d = desired.mag()
    let speed = this.maxSpeed
    if (d < 20) {
      speed = map(d, 0, 100, 0, this.maxSpeed)
    }
    desired.setMag(speed)
    let steer = p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxForce)
    return steer
  }

  behaviors () {
    let arrive = this.arrive(this.target)
    let mouse = createVector(mouseX, mouseY)
    let flee = this.flee(mouse)
    flee.mult(2)
    this.applyForce(arrive)
    this.applyForce(flee)
  }

  flee (target) {
    let desired = p5.Vector.sub(target, this.pos)
    let d = desired.mag()
    if (d < 75) {
      desired.setMag(this.maxSpeed)
      desired.mult(-1)
      let steer = p5.Vector.sub(desired, this.vel)
      steer.limit(this.maxForce)
      return steer
    } else {
      return createVector(0, 0)
    }
  }

  show () {
    push()
      fill(255)
      noStroke()
      ellipse(this.pos.x, this.pos.y, this.r)
    pop()
  }

  update () {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }
}
