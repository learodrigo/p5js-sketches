function setup() {
  createCanvas(300, 300)
  createElement('h2', 'This is a Heading 2')
}

function mousePressed () {
  createP(`This paragraph is created by p5.js in mousex = ${mouseX}`)
}

function draw() {
  background(200)
  fill(255, 0, 0)
  noStroke()
  rect(175, 175, 50, 50)
}
