/**
 * Drawing attachtion and repulsion forces demo
 * Study about how vector and forces work, and how they interact each other
 *
 * TODO: What if we draw a container shape with attractors
 *
 * video object trails - https://www.youtube.com/watch?v=vqE8DMfOajk
 */

const P_NUM = 900

let attractors = []
let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)

  // Initializing the first attractor
  for (let i = 0; i < 10; i++) {
    attractors.push(createVector(random(width), random(height)))
  }

  // Initializing the particles
  for (let i = 0; i < P_NUM; i++) {
    // Fix values make interesting shapes
    // let x = width/2
    // let y = height/2
    let x = random(width * 0.2, width * 0.8)
    let y = random(height * 0.2, height * 0.8)
    particles[i] = new Particle(x, y)
  }
}

function draw() {
  // It's interesting with no trails
  // background(0)

  // Attractors display
  for (let a of attractors) {
    push()
    strokeWeight(8)
    stroke(0, 0)
    point(a.x, a.y)
    pop()
  }

  // Particles display
  for (let i = 0; i < particles.length; i++) {
    for (let j = 0; j < attractors.length; j++) {
      particles[i].attracted(attractors[j])
    }
    particles[i].update()
    particles[i].show()
  }
}

// function mousePressed () {
//   attractors.push(createVector(mouseX, mouseY))
// }
