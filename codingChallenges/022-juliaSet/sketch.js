// https://en.wikipedia.org/wiki/Julia_set
// http://paulbourke.net/fractals/juliaset/

// const ca = 0
// const cb = 0.8
// const ca = -0.70167
// const cb = -0.3842
let ca
let cb

const maxI = 100

const minVal = -1.5
const maxVal = 1.5

function setup() {
  createCanvas(400, 400)
  pixelDensity(1)
}

function draw() {
  ca = map(mouseX, 0, width, -1, 1)
  cb = map(mouseY, 0, height, -1, 1)

  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let a = map(x, 0, width, minVal, maxVal)
      let b = map(y, 0, height, minVal, maxVal)

      let n = 0

      while (n < maxI) {
        let aa = a * a - b * b
        let bb = 2 * a * b

        if (abs(aa + bb) > 4) {
          break
        }

        a = aa + ca
        b = bb + cb

        n++
      }

      // let bright = 255
      // let bright = (n * 16) % 255
      let bright = map(n, 0, maxI, 255, 0)
      // bright = map(sqrt(bright), 0, 1, 0, 255)
      if (n === maxI) {
        bright = 0
      }

      let pix = (x + y * width) * 4
      pixels[pix + 0] = bright
      pixels[pix + 1] = bright
      pixels[pix + 2] = bright
      pixels[pix + 3] = 255
    }
  }
  updatePixels()
}
