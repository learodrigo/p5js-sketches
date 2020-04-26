/**
 * https://www.girldevelopit.com/
 * https://pioneerworks.org/
 * http://xie-emily.com/generative_art/green_rain.html
 * https://github.com/emilyxxie/green_rain
 */

const symbolSize = 18

let streams = []

function setup() {
  createCanvas(windowWidth, windowHeight - 16)

  let x = 0
  for (let i = 0; i < width / symbolSize; i++) {
    streams[i] = new Stream()
    streams[i].generateSymbols(x, random(-100, 0))
    x += symbolSize
  }
}

function draw() {
  background(0, 140)

  for (let s of streams) {
    s.render()
  }
}
