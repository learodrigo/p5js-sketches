class Leaf {
  constructor () {
    this.pos = createVector(random(width), random(height - 100))
    this.reached = false
  }

  show () {
    fill(255)
    noStroke()
    ellipse(this.pos.x, this.pos.y, 4)
  }
}
