class Branch {
  constructor (begin, end) {
    this.begin = begin
    this.end = end
    this.finished = false
    this.rotate = PI/4
  }

  show () {
    stroke(255)
    line(this.begin.x, this.begin.y, this.end.x, this.end.y)
  }

  branchA () {
    let dir = p5.Vector.sub(this.end, this.begin)
    dir.rotate(this.rotate/PI)
    dir.mult(0.67)
    let newEnd = p5.Vector.add(this.end, dir)

    return new Branch(this.end, newEnd)
  }

  branchB () {
    let dir = p5.Vector.sub(this.end, this.begin)
    dir.rotate(-this.rotate/PI)
    // dir.rotate(-this.rotate)
    dir.mult(0.67)
    let newEnd = p5.Vector.add(this.end, dir)

    return new Branch(this.end, newEnd)
  }

  jitter () {
    this.end.x += random(-1, 1)
    this.end.y += random(-1, 1)
  }
}
