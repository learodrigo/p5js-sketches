/**
 * follow the path of a circle in 2D Perlin noise space in order to use noise values that loop
 *
 * https://twitter.com/etiennejcb/status/1096403588069425152
 * CHECK - https://necessarydisorder.wordpress.com/2017/11/15/drawing-from-noise-and-then-making-animated-loopy-gifs-from-there/
 */

let slider, sliderP

let phase = 0
let zOffset = 0

function setup() {
  createCanvas(windowWidth, windowHeight - 50)
  sliderP = createP('Points number')
  slider = createSlider(0, 10, 5, 0.01)
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  stroke(255)
  strokeWeight(2)
  noFill()

  let noiseMax = slider.value()

  beginShape()
  for (let a = 0; a < TWO_PI; a += 0.03) {
    let xOffset = map(cos(a), -1, 1, 0, noiseMax)
    let yOffset = map(sin(a), -1, 1, 0, noiseMax)
    let r = map(noise(xOffset, yOffset, zOffset), 0, 1, 100, 200)
    let x = r * cos(a)
    let y = r * sin(a)
    vertex(x, y)
  }
  endShape(CLOSE)

  zOffset += 0.01
}
