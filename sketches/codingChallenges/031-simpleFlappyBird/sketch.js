// https://en.wikipedia.org/wiki/Flappy_Bird
// TODO: add score, remake pipe.hits()

let bird
let pipes = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  bird = new Bird()
  pipes.push(new Pipe())
}

function keyPressed () {
  if (key === ' ') {
    bird.up()
  }
}

function draw() {
  background(0)

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].main()

    // Visual feedback
    if (pipes[i].hits(bird)) {
      print('HIT')
      // Here can be add something else
    }

    // Get rid of useless pipes
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)
    }
  }

  // Every amount of frames, we add a pipe
  if (frameCount % 100 === 0) {
    pipes.push(new Pipe())
  }

  bird.main()
}
