// https://en.wikipedia.org/wiki/Diffusion-limited_aggregation
// http://paulbourke.net/fractals/dla/
// https://atom.io/packages/atom-live-server

const CELL_AMOUNTS = 200
const TIMES_PER_FRAME = 200
const RADIUS_SHRINK = 0.99

let hu = 0
let radius = 8
let tree = []
let walkers = []

function setup() {
  createCanvas(400, 400)
  colorMode(HSB)
  // Starting point
  tree.push(new Walker(width / 2, height / 2))
  // Walkers
  for (let i = 0; i < CELL_AMOUNTS; i++) {
    walkers[i] = new Walker()
    radius *= RADIUS_SHRINK
  }
}

function draw() {
  background(0)

  // Showing tree points
  for (let i = 0; i < tree.length; i++) {
    tree[i].show()
  }

  // Showing walkers
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].show()
  }
  // Animation drawing
  for (let tpf = 0; tpf < TIMES_PER_FRAME; tpf++) {
    for (let i = 0; i < walkers.length; i++) {
      walkers[i].walk()
      if (walkers[i].isStuck(tree)) {
        walkers[i].setHue(hu % 360)
        hu += 2
        tree.push(walkers[i])
        walkers.splice(i, 1)
      }
    }
  }

  // To keep always CELL_AMOUNTS on the view
  let walker = walkers[walkers.length - 1]
  if (walker) {
  let r = walker.r
    while (walkers.length < CELL_AMOUNTS && r > 4) {
      radius *= RADIUS_SHRINK
      walkers.push(new Walker())
    }
  }
}
