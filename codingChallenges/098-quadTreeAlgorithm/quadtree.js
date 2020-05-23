class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  show () {
    push()
    stroke(255)
    strokeWeight(2)
    point(this.x, this.y)
    pop()
  }
}

class Rectangle {
  constructor (x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  contains (pt) {
    return (
      pt.x >= this.x - this.w &&
      pt.x <= this.x + this.w &&
      pt.y >= this.y - this.h &&
      pt.y <= this.y + this.h
    )
  }

  intersects (range) {
    // Returning NOT not intersection
    return !(
      range.x - range.w > this.x + this.w ||
      range.x + range.w < this.x - this.w ||
      range.y - range.h > this.y + this.h ||
      range.y + range.h < this.y - this.h
    )
  }
}

class QuadTree {
  constructor (b, n) {
    this.boundary = b
    this.capacity = n
    this.points = []
    this.divided = false
  }

  subdivide () {
    const x = this.boundary.x
    const y = this.boundary.y
    const w = this.boundary.w
    const h = this.boundary.h

    const ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2)
    this.northeast = new QuadTree(ne, this.capacity)

    const nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2)
    this.northwest = new QuadTree(nw, this.capacity)

    const se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2)
    this.southeast = new QuadTree(se, this.capacity)

    const sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2)
    this.southwest = new QuadTree(sw, this.capacity)

    // Done
    this.divided = true
  }

  insert (pt) {
    // Checking for recursion
    if (!this.boundary.contains(pt)) {
      return false
    }

    if (this.points.length < this.capacity) {
      this.points.push(pt)
      return true

    } else {
      if (!this.divided) {
        this.subdivide()
      }

      if (this.northeast.insert(pt)) return true
      if (this.northwest.insert(pt)) return true
      if (this.southeast.insert(pt)) return true
      if (this.southwest.insert(pt)) return true
    }
  }

  query (range, found) {
    if (!found) {
      found = []
    }

    // Not intersects, it's not in the current quad
    if (!this.boundary.intersects(range)) {
      return found

    } else {
      // Checking the points in the current quad
      for (let p of this.points) {
        if (range.contains(p)) {
          found.push(p)
        }
      }

      // Checking points in subdivisions
      if (this.divided) {
        this.northwest.query(range, found)
        this.northeast.query(range, found)
        this.southwest.query(range, found)
        this.southeast.query(range, found)
      }
    }

    return found
  }

  show () {
    push()
    stroke(0, 255, 10, 150)
    strokeWeight(1)
    noFill()
    rectMode(CENTER)
    rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2)
    pop()

    // Recursively draw children
    if (this.divided) {
      this.northeast.show()
      this.northwest.show()
      this.southeast.show()
      this.southwest.show()
    }

    for (let p of this.points) {
      p.show()
    }
  }
}
