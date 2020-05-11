class Walker {
  constructor(x, y, stuck) {
    if (x && y) {
      this.pos = createVector(x, y)
    } else {
      this.pos = this.randomPoints()
    }
    this.stuck = stuck
  }

  distSq (a, b) {
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
      if (d < (CELL_RADIUS * CELL_RADIUS * 4)) {
        this.stuck = true
        return true
        break;
      }
    }

    return false
  }

  randomPoints () {
    // Return a set of random points from the edges
    let i = floor(random(4))
         if (i === 0) return createVector(random(width), 0)
    else if (i === 1) return createVector(random(width), height)
    else if (i === 2) return createVector(0, random(height))
    else if (i === 3) return createVector(width, random(height))
  }

  show () {
    this.stuck ? fill(255, 0, 255) : fill(255, 100)
    noStroke()
    ellipse(this.pos.x, this.pos.y, CELL_RADIUS * 2)
  }

  walk() {
    let vel = p5.Vector.random2D()
    this.pos.add(vel)
    this.pos.x = constrain(this.pos.x, 0, width)
    this.pos.y = constrain(this.pos.y, 0, height)
  }
}
