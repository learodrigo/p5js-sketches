const c = 30
const dt = 0.1
const G = 4
const collisionThreshold = 20

const photons = []
let m87, start, end, pausePlay

function setup() {
  createCanvas(windowWidth, windowHeight)
  ellipseMode(RADIUS)
  background(255)

  m87 = new BlackHole(width / 2 - 100, height / 2 - 100, 3000)

  start = height / 2
  end = start - m87.rs * 2.6
  pausePlay = false

  for (let y = 0; y < start; y += 15) {
    photons.push(new Photon(width - 20, y))
  }
}

function mousePressed () {
  pausePlay = !pausePlay
}

function draw() {
  background(255)

  m87.show()

  stroke(0, 150)
  strokeWeight(1)
  line(0, start, width, start)
  line(0, end, width, end)

  photons.forEach(p => {
    if (!pausePlay) {
      m87.pull(p)
      p.update()
    }

    p.show()
  });
}
