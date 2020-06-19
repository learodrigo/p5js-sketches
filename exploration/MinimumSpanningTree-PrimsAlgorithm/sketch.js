const vertices = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 100; i++) {
    let v = createVector(random(width), random(height))
    vertices.push(v)
  }
}

function mousePressed () {
  const v = createVector(mouseX, mouseY)
  vertices.push(v)
}

function draw() {
  background(51)

  const reached = []
  const unreached = []

  for (const v of vertices) {
    unreached.push(v)
  }

  const r = floor(random(unreached.length))
  const start = unreached[r]
  reached.push(start)
  unreached.splice(r, 1)

  while (unreached.length > 0) {
    let record = 10000
    let rIndex
    let uIndex

    for (let i = 0; i < reached.length; i++) {
      for (let j = 0; j < unreached.length; j++) {
        let v1 = reached[i]
        let v2 = unreached[j]
        let d = dist(v1.x, v1.y, v2.x, v2.y)
        if (d < record) {
          record = d
          rIndex = i
          uIndex = j
        }
      }
    }

    const v1 = reached[rIndex]
    const v2 = unreached[uIndex]

    stroke(255)
    line(v1.x, v1.y, v2.x, v2.y)

    reached.push(v2)
    unreached.splice(uIndex, 1)
  }

  for (const v of vertices) {
    fill(255)
    noStroke()
    ellipse(v.x, v.y, 12)
  }
}
