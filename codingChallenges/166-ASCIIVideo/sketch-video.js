const DENSITY = "Ñ#W$9876543210?!abc;:+=-,._ "
const D_LENGTH = DENSITY.length

let video
let asciiDiv

function setup() {
  noCanvas()

  video = createCapture(VIDEO)
  video.size(64, 64)
  asciiDiv = createDiv()
}

function draw() {
  background(0)

  video.loadPixels()
  let asciiImage = ""
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelsIndex = (i + j * video.width) * 4

      const r = video.pixels[pixelsIndex + 0]
      const g = video.pixels[pixelsIndex + 1]
      const b = video.pixels[pixelsIndex + 2]

      const average = int((r + g + b) / 3)
      const charIndex = int(map(average, 0, 255, D_LENGTH - 1, 0))
      const char = DENSITY[charIndex]

      asciiImage += char === " " ? "&nbsp;" : char
    }
    asciiImage += "<br />"
  }
  asciiDiv.html(asciiImage)
}
