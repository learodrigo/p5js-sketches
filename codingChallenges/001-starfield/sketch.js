const num = 800
let stars = []
let speed

function setup() {
  createCanvas(600, 400)
  for (let i = 0; i < num; i++) {
    stars[i] = new Star()
  }
}

function draw() {
  background(0)
  speed = map(mouseX, 0, width, 0, 20)

  // Centering the movement
  translate(width/2, height/2)

  for (let i = 0; i < stars.length; i++) {
    stars[i].show()
    stars[i].update()
  }
}
