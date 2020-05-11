let inc = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight - 16)
  pixelDensity(1)
}

function draw() {
  let yoff = 0

  loadPixels()
    // For each pixel column
    for(let y = 0; y < height; y++) {
      let xoff = 0

      // For each pixel row
      for(let x = 0; x < width; x++) {
        let r = noise(xoff, yoff) * 255
        // The way p5js handles pixels is giving for each one rgba values
        let index = (x + y * width) * 4
        pixels[index + 0] = r
        pixels[index + 1] = r
        pixels[index + 2] = r
        pixels[index + 3] = 255

        xoff += inc
      }
      yoff += inc
    }
  updatePixels()

  // Number of octaves aka detail - 4 is the default
  noiseDetail(4)
  // 2 params for managing the fall off
  noiseDetail(4)

  noLoop()
}
