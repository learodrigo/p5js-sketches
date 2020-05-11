let cols, rows
let scl = 20
let w = 1200
let flying = 0
let h = 800

let terrain = []

function setup() {
  createCanvas(windowWidth, windowHeight - 16, WEBGL)
  cols = w / scl
  rows = h / scl
}

function draw() {

  flying -= 0.1

  let yOffset = 0
  for (let y = 0; y < cols; y++) {
    let xOffset = flying
    terrain[y] = []
    for (let x = 0; x < rows; x++) {
      terrain[y][x] = []
      terrain[y][x] = map(noise(yOffset, xOffset), 0, 1, -75, 75)
      xOffset += 0.2
    }
    yOffset += 0.2
  }

  // Styling
  background(0)
  noFill()
  stroke(200)

  // 3D
  rotateX(PI / 3)
  translate(-w / 2, -h / 2)

  // Actual drawing
  for (let y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP)
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y] )
      vertex(x * scl, (y + 1) * scl, terrain[x][y+1] )
    }
    endShape()
  }

}
