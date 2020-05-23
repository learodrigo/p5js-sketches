/**
 * Building off of the previous coding challenge (2D Ray Casting) I attempt to make my own version the original Wolfenstein 3D Raycasting engine and visualize the "field of view" of the moving particle.
 *
 * https://lodev.org/cgtutor/raycasting.html
 * https://courses.pikuma.com/courses/raycasting
 */

let walls = []
let particle, sceneW, sceneH

let xoff = 0, yoff = 1000

let sliderPOV, sliderPOVp

function setup() {
  createCanvas(windowWidth, windowHeight - 50)
  sceneW = width / 2
  sceneH = height / 2

  particle = new Particle()

  for (let i = 0; i < 5; i++) {
    let a = createVector(random(sceneW), random(sceneH))
    let b = createVector(random(sceneW), random(sceneH))
    walls.push(new Boundary(a.x, a.y, b.x, b.y))
  }

  sliderPOVp = createP('Change angle')
  sliderPOV = createSlider(0, 360, 45, 1)
  sliderPOV.input(changeFOV)
}

function changeFOV () {
  const fov = sliderPOV.value()
  particle.changeFOV(fov)
}

function draw() {
  background(0)

  // Rotating
  if (keyIsDown(LEFT_ARROW)) {
    particle.rotate(-0.1)
  } else if (keyIsDown(RIGHT_ARROW)) {
    particle.rotate(0.1)
  } else if (keyIsDown(UP_ARROW)) {
    particle.move(1)
  } else if (keyIsDown(DOWN_ARROW)) {
    particle.move(-1)
  }

  // 2D rendering
  for (let w of walls) {
    w.show()
  }

  particle.show()

  // 3D rendering
  const scene = particle.look(walls)
  const w = sceneW / scene.length

  push()
  translate(sceneW, 0)
  for (let i = 0; i < scene.length; i++) {
    const sq = scene[i] * scene[i]
    const wSq = sceneW * sceneW
    const b = map(sq, 0, wSq, 255, 0)
    const h = map(scene[i], 0, sceneW, sceneH, 0)
    fill(b)
    noStroke()
    rectMode(CENTER)
    rect(i * w + w / 2, sceneH / 2, w + 1, h)
  }
  pop()
}
