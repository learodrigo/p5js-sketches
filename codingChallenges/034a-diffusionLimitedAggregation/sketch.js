// https://en.wikipedia.org/wiki/Diffusion-limited_aggregation
// http://paulbourke.net/fractals/dla/
// https://atom.io/packages/atom-live-server

const CELL_AMOUNTS = 1000
const CELL_RADIUS = 2
const TIMES_PER_FRAME = 200

let tree = []
let walkers = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  // Creating a starting point
  tree[0] = new Walker(width / 2, height / 2, true)
  for (let i = 0; i < CELL_AMOUNTS; i++) {
    walkers[i] = new Walker()
  }
}

function draw() {
  background(51)

  // Showing tree points
  for (const t of tree) {
    t.show()
  }

  // Showing walkers
  for (const walker of walkers) {
    walker.show()
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
