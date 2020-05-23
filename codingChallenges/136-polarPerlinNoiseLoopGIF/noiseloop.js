class NoiseLoop {
  constructor (_diam, _min, _max) {
    this.diam = _diam
    this.min = _min
    this.max = _max
    this.cx = random(1000)
    this.cy = random(1000)
  }

  value (a) {
  let xOffset = map(cos(a), -1, 1, this.cx, this.cx + this.diam)
  let yOffset = map(sin(a), -1, 1, this.cy, this.cy + this.diam)
  let r = noise(xOffset, yOffset)
  return map(r, 0, 1, this.min, this.max)
  }
}
