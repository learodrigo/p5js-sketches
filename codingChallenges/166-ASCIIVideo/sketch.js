const DENSITY = "Ñ#W$9876543210?!abc;:+=-,._ "
const D_LENGTH = DENSITY.length

let img

function preload() {
  img = loadImage("image.jpeg")
}

function setup() {
  noCanvas()

  const w = width / img.width
  const h = height / img.height

  img.loadPixels()
  for (let j = 0; j < img.height; j++) {
    let row = ""

    for (let i = 0; i < img.width; i++) {
      const pixelsIndex = (i + j * img.width) * 4

      const r = img.pixels[pixelsIndex + 0]
      const g = img.pixels[pixelsIndex + 1]
      const b = img.pixels[pixelsIndex + 2]

      const average = int((r + g + b) / 3)
      const charIndex = int(map(average, 0, 255, D_LENGTH - 1, 0))
      const char = DENSITY[charIndex]

      row += char === " " ? "&nbsp;" : char
    }
    createDiv(row)
  }
}
