const inc = 0.005
let start = 0

function setup () {
  createCanvas(windowWidth, windowHeight - 16)
}

function draw () {
  background(25)
  shapeCreation()
  move()
}

function move () {
  start += inc
}

function shapeCreation () {
  beginShape()
    let xoff = start
    for(let x = 0; x < width; x++) {
      stroke(255)
      noFill()
      let y = noise(xoff) * height
      xoff += inc
      vertex(x, y)
    }
  endShape()
}
