let height, width

let p0, p1, p2

function setup () {
  height = windowHeight
  width = windowWidth
  createCanvas(windowWidth, windowHeight)

  p0 = new Particle(0, height / 2)
  p1 = new Particle(height / 2, 0)
  p2 = new Particle(width / 2, 0)
  p3 = new Particle(width, height / 2)
}

function draw () {
  background(0)
  stroke(255)

  // strokeWeight(24)
  // point(0, 300)
  // point(mouseX, mouseY)
  // point(400, 400)
  // point(600, 300)

  // strokeWeight(4)
  // noFill()
  // bezier(0, 300, mouseX, mouseY, 400, 400, 600, 300)

  // strokeWeight(2)
  // line(0, 300, mouseX, mouseY)
  // line(400, 400, 600, 300)

  // strokeWeight(4)
  // noFill(0)
  // beginShape()
  //   vertex(0, 300)
  //   bezierVertex(mouseX, mouseY, 400, 400, 600, 300)
  //   bezierVertex(400, 600, 200, 100, 0, 300)
  // endShape()

  strokeWeight(1)
  noFill()
  // line(p0.x, p0.y, p1.x, p1.y)

    p0.update()
    p1.update()
    p2.update()
    p3.update()

  const delta = 0.02

  beginShape()
    for (let t = 0; t <= 1.01; t += delta) {
      const x1 = lerp(p0.x, p1.x, t)//p0.x + (p1.x - p0.x) * t
      const y1 = lerp(p0.y, p1.y, t)//p0.y + (p1.y - p0.y) * t
      const x2 = lerp(p1.x, p2.x, t)//p0.x + (p1.x - p0.x) * t
      const y2 = lerp(p1.y, p2.y, t)//p0.y + (p1.y - p0.y) * t

      line(x1, y1, x2, y2)

      const v1 = quadratic(p0, p1, p2, t)
      const v2 = quadratic(p1, p2, p3, t)

      const x = lerp(v1.x, v2.x, t)
      const y = lerp(v1.y, v2.y, t)

      line(v1.x, v1.y, v2.x, v2.y)

      vertex(x, y)

      // vertex(x, y)
    }
  endShape()
}

const quadratic = (p0, p1, p2, t) => {
  const x1 = lerp(p0.x, p1.x, t)//p0.x + (p1.x - p0.x) * t
  const y1 = lerp(p0.y, p1.y, t)//p0.y + (p1.y - p0.y) * t
  const x2 = lerp(p1.x, p2.x, t)//p0.x + (p1.x - p0.x) * t
  const y2 = lerp(p1.y, p2.y, t)//p0.y + (p1.y - p0.y) * t
  const x = lerp(x1, x2, t)
  const y = lerp(y1, y2, t)

  return createVector(x, y)
}
