class Particle {
  constructor () {
    this.d = 16
    this.x = width / 2
    this.y = height - this.d
    this.vx = random(-1, 1)
    this.vy = random(-5, -1)
    this.alpha = 255
  }

  finished () {
    return this.alpha < 0
  }

  update () {
    this.x += this.vx
    this.y += this.vy
    this.alpha -= 5
  }

  show () {
    fill(255, this.alpha)
    noStroke()
    ellipse(this.x, this.y, floor(random(4, this.d)))
  }
}
