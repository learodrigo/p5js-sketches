/*
 * Metaballs
 *
 * https://www.youtube.com/watch?v=1scFcY-xMrI
 * https://www.gamedev.net/tutorials/_/technical/graphics-programming-and-theory/exploring-metaballs-and-isosurfaces-in-2d-r2556/
 *
 */

const BALLS = 15
const BRIGHT_EXPANSION = 5

let blobs = []

function setup() {
  createCanvas(300, 300)
  colorMode(HSB)

  for (let i = 0; i < BALLS; i++) {
    blobs.push( new Blob(random(width), random(height)) )
  }
}

function draw() {
  // This algoritm will color only whatever is on the screen
  loadPixels()
  // For each x - y
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let hue = 0

      // Go through every blob
      for (let i = 0; i < blobs.length; i++) {
        // Get the difference between that blob and the current position
        let xDif = x - blobs[i].pos.x
        let yDif = y - blobs[i].pos.y
        let d = sqrt((xDif * xDif) + (yDif * yDif))

        // Hue value to be picked
        // As they come together, the color's combined
        hue += BRIGHT_EXPANSION * blobs[i].r / d
      }

      // Gray scale
      // let c = color(hue)
      // Rainbow
      let c = color(hue, 255, 255)
      // idk why, pixels[] is not working so we set the value
      set(x, y, c)
    }
  }
  updatePixels()

  // Rendering the blobs
  for (let i = 0; i < blobs.length; i++) {
    blobs[i].main()
  }
}
