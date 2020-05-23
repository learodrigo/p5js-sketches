class Toothpick {
  constructor (x, y, dir) {
    this.dir = dir
    this.newPick = true

    this.ax = (this.dir === 1) ? x - LEN / 2 : x
    this.bx = (this.dir === 1) ? x + LEN / 2 : x
    this.ay = (this.dir === 1) ? y : y - LEN / 2
    this.by = (this.dir === 1) ? y : y + LEN / 2
  }

  intersects (x, y) {
    return ((this.ax === x && this.ay === y) || (this.bx === x && this.by === y))
  }

  creation (others, type) {
    let available = true
    for (let other of others) {
      if (type && other !== this && other.intersects(this.ax, this.ay)) {
        available = false
        break
      }
      if (!type && other !== this && other.intersects(this.bx, this.by)) {
        available = false
        break
      }
    }

    if (type && available) {
      return new Toothpick(this.ax, this.ay, this.dir * -1)
    }

    if (!type && available) {
      return new Toothpick(this.bx, this.by, this.dir * -1)
    }

    return null
  }

  show (factor) {
    stroke(255)
    if (this.newPick) {
      stroke(0, 0, 255)
    }
    // As it grows, the line gets thiner
    strokeWeight(1 / factor)
    line(this.ax, this.ay, this.bx, this.by)
  }
}
