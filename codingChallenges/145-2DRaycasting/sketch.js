/**
 * implement a basic ray casting engine with line segment "surfaces" and vector "rays." The result simulates a light source casting shadows in a 2D canvas.
 *
 * https://ncase.me/sight-and-light/
 * https://www.redblobgames.com/articles/visibility/
 * https://github.com/bmoren/p5.collide2D
 * https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
 * Coding Adventure: Ray Marching - https://www.youtube.com/watch?v=Cp5WWtMoeKg
 * Matrix Math - https://www.youtube.com/watch?v=uSzGdfdOoG8
 */

let walls = []
let particle

let xoff = 0, yoff = 1000

function setup() {
  createCanvas(windowWidth, windowHeight)

  particle = new Particle()

  for (let i = 0; i < 15; i++) {
    let a = createVector(random(width), random(height))
    let b = createVector(random(width), random(height))
    walls.push(new Boundary(a.x, a.y, b.x, b.y))
  }
}

function draw() {
  background(0)

  for (let w of walls) {
    w.show()
  }

  particle.update(noise(xoff) * width, noise(yoff) * height)
  particle.show()
  particle.look(walls)

  xoff += 0.01
  yoff += 0.01
}
