let angle = 0
let slider

function setup() {
  createCanvas(600, 400)
  slider = createSlider(0, TWO_PI, PI / 2, 0.01)
}

function draw() {
  background(25)
  angle = slider.value()

  stroke(255)
  translate(width/2, height)

  branch(100)
}

function branch (len) {
  line(0, 0, 0, -len)
  translate(0, -len)
  if (len > 4) {
    push()
    rotate(angle)
    branch(len * 0.67)
    pop()
    push()
    rotate(-angle)
    branch(len * 0.67)
    pop()
  }
}
