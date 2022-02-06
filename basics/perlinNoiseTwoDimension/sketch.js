const inc = 0.003

function setup() {
  createCanvas(windowWidth, windowHeight - 16)
  pixelDensity(1)
}

function draw() {
  let yoff = 0

  loadPixels()
    for(let y = 0; y < height; y++) {
      let xoff = 0

      for(let x = 0; x < width; x++) {
        const r = noise(xoff, yoff) * 255
        const index = (x + y * width) * 4

        pixels[index + 0] = r
        pixels[index + 1] = r
        pixels[index + 2] = r
        pixels[index + 3] = 255

        xoff += inc
      }
      yoff += inc
    }
  updatePixels()

  noLoop()
}
