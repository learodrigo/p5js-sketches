// https://en.wikipedia.org/wiki/Diffusion-limited_aggregation
// http://paulbourke.net/fractals/dla/
// https://atom.io/packages/atom-live-server

const CELL_AMOUNTS = 300
const CELL_RADIUS = 4
const TIMES_PER_FRAME = 200

let tree = []
let walkers = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  // Starting point
  for (let x = 16; x < width; x += 16) {
    tree.push(new Walker(x, height, true))
  }
  // Walkers
  for (let i = 0; i < CELL_AMOUNTS; i++) {
    walkers[i] = new Walker()
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
        tree.push(walkers[i])
        walkers.splice(i, 1)
      }
    }
  }

  // To keep always CELL_AMOUNTS on the view
  // while (walkers.length < CELL_AMOUNTS) {
  //   walkers.push(new Walker())
  // }
}
