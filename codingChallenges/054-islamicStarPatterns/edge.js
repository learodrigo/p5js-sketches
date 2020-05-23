class Edge {
  // a and b are endpoints
  constructor(a, b) {
    this.a = a
    this.b = b
    this.h1 = undefined
    this.h2 = undefined
  }

  hankin (sides) {
    let mid = p5.Vector.add(this.a, this.b)
    mid.mult(0.5)

    let offset1 = mid
    let offset2 = mid

    let v1 = p5.Vector.sub(this.a, mid)
    let v2 = p5.Vector.sub(this.b, mid)

    // Edge length
    let elen = v1.mag() + delta

    if (delta) {
      v1.setMag(delta)
      v2.setMag(delta)
      offset1 = p5.Vector.add(mid, v2)
      offset2 = p5.Vector.add(mid, v1)
    }

    v1.normalize().rotate(radians(-angle))
    v2.normalize().rotate(radians(angle))

    // Law of sines
    let interior = (sides - 2) * PI / sides
    let alpha = interior * 0.5
    let beta = PI - radians(angle) - alpha
    let hlen = (elen  * sin(alpha)) / sin(angle)

    v1.setMag(hlen)
    v2.setMag(hlen)

    this.h1 = new Hankin(offset1, v1)
    this.h2 = new Hankin(offset2, v2)
  }

  show() {
    stroke(51)
    strokeWeight(2)
    line(this.a.x, this.a.y, this.b.x, this.b.y)
    this.h1.show()
    this.h2.show()
  }
}
