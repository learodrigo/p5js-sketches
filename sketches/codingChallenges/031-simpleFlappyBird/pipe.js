class Pipe {
  constructor () {
    this.bottom = random(height / 2)
    this.highlight = false
    this.top = random(height / 2)
    this.speed = 2
    this.x = width
    this.w = random(20,40)
  }

  hits (bird) {
    // The bird hits the sides of the pipe and is between any pipe width
    if ( (bird.y < this.top ||
      bird.y > height - this.bottom) &&
      (bird.x > this.x &&
      bird.x < this.x + this.w)
    ) {
      this.highlight = true
      return true
    }
    this.highlight = false
    return false
  }

  offscreen () {
    return this.x < -this.w
  }

  show () {
    if (this.highlight) {
      fill(255, 100, 100)
    } else {
      fill(255)
    }
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height - this.bottom, this.w, this.bottom)
  }

  update () {
    // We substract to go x = 0
    this.x -= this.speed
  }

  main () {
    this.update()
    this.show()
  }
}
