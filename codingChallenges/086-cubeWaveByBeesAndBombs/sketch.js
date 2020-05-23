let angle = 0
let magicAngle
let maxD
let w = 24

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  magicAngle = atan( 1 / sqrt(2) )
  maxD = dist(0, 0, 200, 200)
}

function draw() {
  background(255, 0, 125)
  ortho(-600, 600, -600, 600, -200, 5000)

  rotateY(magicAngle)
  rotateX(-QUARTER_PI)

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push()
      let d = dist(x, z, width/2, height/2 )
      let offset = map(d, 0, maxD, -PI, PI)
      let a = angle + offset
      let h = floor(map(sin(a), -1, 1, 100, 500))
      translate(x - width / 2, 0, z - height / 2)
      normalMaterial()
      box(w - 2, h, w - 2)
      pop()
    }
  }

  angle -= 0.07
}
