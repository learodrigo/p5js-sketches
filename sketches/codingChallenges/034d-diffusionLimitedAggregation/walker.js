class Walker {
  constructor(x, y) {
    if (arguments.length) {
      this.pos = createVector(x, y)
      this.stuck = true
    } else {
      this.pos = this.randomPoints()
      this.stuck = false
    }

    this.r = radius
  }

  distSq(a, b) {
    // Returns the sum of the sqrt of two given vectors distances,
    // being b the further away and a the closest
    let dx = b.x - a.x
    let dy = b.y - a.y
    return dx * dx + dy * dy
  }

  isStuck(others) {
    // For each walker we will check how far away are from the
    // tree point according to the center and return a bool
    for (let i = 0; i < others.length; i++) {
      let d = this.distSq(this.pos, others[i].pos)
      if (d < (this.r * others[i].r * 4)) {
        this.stuck = true
        return true
        break;
      }
    }

    return false
  }

  randomPoints() {
    // Return a set of random points from the edges
    let i = floor(random(4))
         if (i === 0) return createVector(random(width), 0)
    else if (i === 1) return createVector(random(width), height)
    else if (i === 2) return createVector(0, random(height))
    else if (i === 3) return createVector(width, random(height))
  }

  show() {
    noStroke()
    let hu = map(this.r, 0, 8, 0, 360)
    this.stuck ? fill(hu, 360, 360) : fill(255, 100)
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }

  walk() {
    let vel = p5.Vector.random2D()
    this.pos.add(vel)
    this.pos.x = constrain(this.pos.x, 0, width)
    this.pos.y = constrain(this.pos.y, 0, height)
  }
}
