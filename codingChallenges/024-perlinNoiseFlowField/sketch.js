let inc = 0.1
let scl = 10
let cols, rows
let zoff = 0

let particles = []
let flowFields

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)

  cols = floor(width / scl)
  rows = floor(height / scl)

  for (let i = 0; i < 1000; i++) {
    particles.push(new Particle())
  }

  flowFields = new Array(cols * rows)
}

function draw() {
  background(255, 10)

  let yoff = 0
  for(let y = 0; y < rows; y++) {
    let xoff = 0

    for(let x = 0; x < cols; x++) {
      let index = x + y * cols
      let angle = noise(xoff, yoff, zoff) * TWO_PI
      let v = p5.Vector.fromAngle(angle)
      v.setMag(1)

      flowFields[index] = v
      xoff += inc

      // stroke(0, 100)
      // strokeWeight(1)
      // push()
      // translate(x * scl, y * scl)
      // rotate(v.heading())
      // line(0, 0, scl, 0)
      // pop()
    }

    yoff += inc
    zoff += 0.00003
  }

  for (let p of particles) {
    p.follow(flowFields)
    p.update()
    p.edges()
    p.show()
  }
}
