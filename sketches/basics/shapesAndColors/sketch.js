// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

const canvas = 400
const sqr = canvas / 2

let col = {
  r: 100,
  g: 120,
  b: 150,
}

let on = false

// This runs only once
function setup() {
  createCanvas((canvas + canvas / 2), canvas)
}

// This keeps on running
function draw() {
  if (on) {
    background(col.r, col.g, col.b)
  } else {
    background(255, 250, 100)
  }

  // Square
  stroke(255, 150, 50)
  if (
    //( (canvas/4) * 2, canvas / 4, sqr, sqr )
     ( mouseX >= ((canvas / 4) * 2) ) &&
     ( mouseX <= ((canvas / 4) * 2) + sqr ) &&
     ( mouseY >= canvas / 4 ) &&
     ( mouseY <= canvas / 4 + sqr )
  ) {
    fill(255, 0 , 0)
  } else {
    fill(0, 255, 0)
  }

  rect((canvas / 4) * 2, canvas / 4, sqr, sqr)

  // Ellipse
  fill(255, 100, 100, 175)
  noStroke()
  ellipse((canvas / 4) * 2, canvas / 2, sqr, sqr)

  // Eraser
  fill(col.r, col.g, col.b)
  noStroke()
  ellipse(mouseX, mouseY, 20, 20)
}

function mousePressed () {
  if (
    //( (canvas/4) * 2, canvas / 4, sqr, sqr )
     ( mouseX >= ((canvas / 4) * 2) ) &&
     ( mouseX <= ((canvas / 4) * 2) + sqr ) &&
     ( mouseY >= canvas / 4 ) &&
     ( mouseY <= canvas / 4 + sqr )
  ) {
    on = !on
  }
}
