class Hankin {
  constructor (a, v) {
    this.a = a
    this.v = v
    this.b = p5.Vector.add(a, v)
  }

  show () {
    stroke(10, 40, 90)
    strokeWeight(2)
    line(this.a.x, this.a.y, this.b.x, this.b.y)

//     // Debuging
//     // Circle where two lines start
//     circle(this.a.x, this.a.y, 4)

//     // Debuging purpose circle where two lines end
//     if (this.end) {
//       fill(255, 255, 0)
//       circle(this.b.x, this.b.y, 4)
//     }

  }
}
