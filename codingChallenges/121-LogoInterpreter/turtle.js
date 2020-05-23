const COMMANDS = {
  'fd': (amt) => {
    turtle.forward(amt)
  },
  'bd': (amt) => {
    turtle.forward(-amt)
  },
  'rt': (angle) => {
    turtle.right(angle)
  },
  'lt': (angle) => {
    turtle.right(-angle)
  },
  'pu': () => {
    turtle.pen = false
  },
  'pd': () => {
    turtle.pen = true
  },
}

class Turtle {
  constructor (x, y, angle) {
    this.x = x
    this.y = y
    this.dir = angle
  }

  forward (amt) {
    amt = parseInt(amt)
    if (this.pen) {
      stroke(255)
      strokeWeight(2)
      line(0, 0, amt, 0)
    }
    translate(amt, 0)
  }

  backward (amt) {
    this.forward(-amt)
  }

  right (angle) {
    angle = parseInt(angle)
    rotate(angle)
  }

  reset () {
    translate(this.x, this.y)
    rotate(this.dir)
    this.pen = true
  }
}
