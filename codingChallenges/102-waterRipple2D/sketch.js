/**
 * attempt to simulate 2D water ripples
 * https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm
 * https://www.youtube.com/watch?v=DKGodqDs9sA
 */

let cols, rows, current, previous

const dampening = 0.99

function setup() {
  createCanvas(windowWidth, windowHeight)
  pixelDensity(1)

  cols = width
  rows = height

  current  = new Array(cols).fill(0).map(n => new Array(rows).fill(0))
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0))
}

function draw() {
  background(0)
  waterRipple()
}

function mouseDragged () {
  previous[mouseX][mouseY] = 1000
}

function waterRipple () {
  previous[floor(random(1, width - 1))][floor(random(1, height - 1))] = 2000


  loadPixels()
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] = (
        previous[i - 1][j] +
        previous[i + 1][j] +
        previous[i][j - 1] +
        previous[i][j + 1]) /
        2 - current[i][j]

      // Damping
      current[i][j] = current[i][j] * dampening

      // Unlike in Processing, the pixels array in p5.js has 4 entries
      // for each pixel, so we have to multiply the index by 4 and then
      // set the entries for each color component separately.
      let index = (i + j * cols) * 4
      pixels[index + 0] = current[i][j]
      pixels[index + 1] = current[i][j]
      pixels[index + 2] = current[i][j]
      pixels[index + 3] = 255
    }
  }
  updatePixels()

  // Swapping arrays
  const temp = previous
  previous = current
  current = temp
}
