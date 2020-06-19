let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)))
  }
}

function mousePressed () {
  particles.push(new Particle(mouseX, mouseY))
}

function draw() {
  background(21)

  for (const p of particles) {
    p.update()
    p.show()
  }
}
