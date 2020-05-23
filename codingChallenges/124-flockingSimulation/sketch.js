/**
 * create a flocking simulation in JavaScript based on Craig Reynolds "boids" algorithm
 *
 * https://www.red3d.com/cwr/boids/
 * https://natureofcode.com/book/chapter-6-autonomous-agents/
 * book - https://mitpress.mit.edu/books/computational-beauty-nature
 * first representation - https://www.youtube.com/watch?v=86iQiV3-3IA
 */

let alignmentSlider, cohesionSlider, separationSlider
let alignmentSliderP, cohesionSliderP, separationSliderP

let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight - 50)
  // background(0)
  alignmentSliderP = createP('Alignment')
  alignmentSlider = createSlider(0, 10, 1, 0.01)
  cohesionSliderP = createP('Cohesion')
  cohesionSlider = createSlider(0, 10, 1, 0.01)
  separationSliderP = createP('Separation')
  separationSlider = createSlider(0, 10, 1, 0.01)

  for (let i = 0; i < 100; i++) {
    flock.push(new Boid())
  }
}

function draw() {
  background(0)

  for (let boid of flock) {
    boid.edges()
    boid.flock(flock)
    boid.update()
    boid.show()
  }
}
