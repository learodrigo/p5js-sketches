class Particle {
  constructor () {
    this.pos = createVector(width / 2, height / 2)
    this.rays = []

    for (let a = 0; a < 360; a += 3) {
      let ray = new Ray(this.pos, radians(a))
      this.rays.push(ray)
    }
  }

  look (walls) {
    for (let r of this.rays) {
      let closest = null
      let record = Infinity
      for (let w of walls) {
        const pt = r.cast(w)
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt)
          if (d < record) {
            record = d
            closest = pt
          }
        }
      }
      if (closest) {
        stroke(255, 150)
        line(this.pos.x, this.pos.y, closest.x, closest.y)
      }
    }
  }

  update (x, y) {
    this.pos.x = x
    this.pos.y = y
  }

  show () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 8)
    for (let r of this.rays) {
      r.show()
    }
  }
}
