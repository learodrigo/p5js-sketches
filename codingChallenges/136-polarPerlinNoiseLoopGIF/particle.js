class Particle {
  constructor () {
    this.xNoise = new NoiseLoop(0.5, -width, width * 2)
    this.yNoise = new NoiseLoop(0.5, -height, height * 2)
    this.dNoise = new NoiseLoop(2, 2, 70)
  }

  render (a) {
    noFill()
    strokeWeight(4)
    let x = this.xNoise.value(a)
    let y = this.yNoise.value(a)
    let d = this.dNoise.value(a)
    stroke(255, 200)
    ellipse(x, y, d)
  }
}
