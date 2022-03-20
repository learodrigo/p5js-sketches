class Branch {
  constructor(_parent, _pos, _dir) {
    this.parent = _parent
    this.pos = _pos
    this.dir = _dir
    this.origDir = this.dir.copy()
    this.count = 0
    this.len = 5
  }

  next() {
    this.dir.normalize()

    const nextDir = p5.Vector.mult(this.dir, this.len)
    const nextPos = p5.Vector.add(this.pos, nextDir)
    const nextBranch = new Branch(this, nextPos, this.dir.copy())

    return nextBranch
  }

  reset() {
    this.dir = this.origDir.copy()
    this.reset = 0
  }

  show() {
    if (this.parent !== null) {
      stroke(255)
      strokeWeight(2)
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y)
    }
  }
}
