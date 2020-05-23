/**
 * demonstrate how to render a sketch into a perfect, looping GIF
 *
 * https://sasj.tumblr.com/
 * https://beesandbombs.tumblr.com/
 * http://cmuems.com/2016/60212/
 * https://github.com/golanlevin/LoopTemplates
 * https://easings.net/
 * https://ezgif.com/
 */

const TOTAL_FRAMES = 250
let counter = 0

let record = false

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  let percent = 0
  if (record) {
    percent = float(counter) / TOTAL_FRAMES
  } else {
    percent = frameCount % TOTAL_FRAMES / (TOTAL_FRAMES - 1)
  }

  render(percent)

  if (record) {
    // saveFrames('output/gif-'+ nf(counter, 3) +'.png')
    counter++
    if (counter === TOTAL_FRAMES - 1) {
      print('done')
      noLoop()
    }
  }
}

// function mousePressed () {
//   record = true
// }

function render (percent) {
  background(0)
  noStroke()
  fill(255)
  ellipse(percent * width, height / 2, 72)

  let angle = percent * TWO_PI
  translate(width / 2, height / 2)
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(2)
  rotate(angle)
  for (let i = 0; i < 10; i++) rect(0, 0, 56 * (1 + i / 2), 56 * (1 + i / 2))
}
