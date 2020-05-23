/**
 * Explore the concept of a simple particle system and attempt to create a smoke effect
 *
 * https://en.wikipedia.org/wiki/Particle_system
 */

let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)

  // many particles per frame to make it more realistic
  for (let i = 0; i < floor(random(100)); i++) {
    let p = new Particle()
    particles.push(p)
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update()
    particles[i].show()
    if (particles[i].finished()) {
      particles.splice(i , 1)
    }
  }
}
