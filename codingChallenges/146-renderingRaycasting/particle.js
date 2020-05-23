class Particle {
  constructor () {
    this.fov = 45
    this.pos = createVector(width / 2, height / 2)
    this.rays = []
    this.heading = 0

    for (let a = -this.fov / 2; a < this.fov / 2; a += 0.5) {
      let ray = new Ray(this.pos, radians(a) + this.heading)
      this.rays.push(ray)
    }
  }

  changeFOV (fov) {
    this.fov = fov
    this.rays = []
    for (let a = -this.fov / 2; a < this.fov / 2; a += 0.5) {
      let ray = new Ray(this.pos, radians(a))
      this.rays.push(ray)
    }
  }

  rotate (angle) {
    this.heading += angle
    let i = 0
    for (let a = -this.fov / 2; a < this.fov / 2; a += 0.5) {
      this.rays[i].setAngle(radians(a) + this.heading)
      i++
    }
  }

  move (amt) {
    const vel = p5.Vector.fromAngle(this.heading)
    vel.setMag(amt)
    this.pos.add(vel)
  }

  look (walls) {
    let scene = []
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i]
      let closest = null
      let record = Infinity
      for (let w of walls) {
        const pt = ray.cast(w)
        if (pt) {
          let d = p5.Vector.dist(this.pos, pt)
                //Calculate distance projected on camera direction (Euclidean distance will give fisheye effect!)
          const a = ray.dir.heading() - this.heading
          d *= cos(a)
          if (mouseIsPressed) {
            d /= cos(a)
          }
          if (d < record) {
            record = d
            closest = pt
          }
        }
      }
      if (closest) {
        stroke(255, 100)
        line(this.pos.x, this.pos.y, closest.x, closest.y)
      }
      scene[i] = record
    }

    return scene
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
