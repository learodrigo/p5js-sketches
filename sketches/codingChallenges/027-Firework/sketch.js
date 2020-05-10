let fireworks = []
let gravity

function setup() {
  createCanvas(windowWidth, windowHeight)
  gravity = createVector(0, 0.2)
  background(0)
}

function draw() {
  // HSB has a bug for in p5js and this is a workaround to
  // add alpha to the bg
  colorMode(RGB)
  background(0, 25)
  colorMode(HSB)

  if (random(1) < 0.03) fireworks.push(new Firework())

  for (let i = fireworks.length - 1; i >= 0 ; i--) {
    fireworks[i].update()
    fireworks[i].show()
    if (fireworks[i].done()) {
      fireworks.splice(i, 1)
    }
  }
}
