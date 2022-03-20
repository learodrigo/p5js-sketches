// https://en.wikipedia.org/wiki/Mandelbrot_set
// https://meiamso.me/old/mandelbrot/mandelbrot.php

const maxI = 100
const minVal = -0.5
const maxVal = 0.5

let minSlider
let maxSlider

function setup() {
  createCanvas(200, 200)
  pixelDensity(1)

  minSlider = createSlider(-2.5, 0, -2.5, 0.01)
  maxSlider = createSlider(0, 2.5, 2.5, 0.01)
}

function draw() {
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let a = map(x, 0, width, minSlider.value(), maxSlider.value())
      let b = map(y, 0, height, minSlider.value(), maxSlider.value())

      let ca = a
      let cb = b

      let n = 0

      while (n < maxI) {
        let aa = a * a - b * b
        let bb = 2 * a * b
        a = aa + ca
        b = bb + cb

        if (abs(a + b) > 16) {
          break
        }
        n++
      }

      // let bright = 255
      // let bright = (n * 16) % 255
      let bright = map(n, 0, maxI, 0, 1)
      bright = map(sqrt(bright), 0, 1, 0, 255)
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
