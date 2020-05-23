/**
 * follow the path of a circle in 2D Perlin noise space in order to use noise values that loop
 *
 * https://twitter.com/etiennejcb/status/1096403588069425152
 * CHECK - https://necessarydisorder.wordpress.com/2017/11/15/drawing-from-noise-and-then-making-animated-loopy-gifs-from-there/
 * https://processing.org/reference/noise_.html
 * https://ffmpeg.org/
 * https://en.wikipedia.org/wiki/Perlin_noise
 * explanation complete - https://www.youtube.com/watch?v=7k-iJyHq7-k
 */

const TOTAL_FRAMES = 480

let counter = 0
let record = false

let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle())
  }
}

function draw() {
  let percent = 0
  if (record) {
    percent = float(counter % TOTAL_FRAMES) / TOTAL_FRAMES
  } else {
    percent = frameCount % TOTAL_FRAMES / (TOTAL_FRAMES + 25)
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

function render(percent) {
  background(0)

  let a = percent * TWO_PI
  for (let p of particles) {
    p.render(a)
  }
}
