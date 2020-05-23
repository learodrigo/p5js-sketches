class Arc {
  constructor (start, end, dir) {
    this.start = start
    this.end = end
    this.dir = dir
  }

  show () {
  let diam = abs(this.end - this.start)
  let x = (this.end + this.start) / 2
  noFill()
  stroke(255)
  strokeWeight(0.5)
  // ellipse(x, height/2, diam)
  if (this.dir) {
    arc(x, 0, diam, diam, 0, PI)
  } else {
    arc(x, 0, diam, diam, PI, 0)
  }
  }
}
