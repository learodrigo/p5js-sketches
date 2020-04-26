const bubblesAmount = 200

let bubbles = []

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30)
  fixedBubblesNum()
}

function draw() {
  background(0)

  for (let bubble of bubbles) {
    // bubble.displayLineBall()
    bubble.displayAlphaBall()
    // bubble.bounceBall()
    bubble.moveRandom()

    let overlapping = false
    for (let other of bubbles) {
      if ( bubble !== other && bubble.intersects(other) ) {
        overlapping = true
      }
    }

    bubble.changeColor(overlapping ? 255 : 0)
  }

  // If more than 10 bubbles, the last gets removed
  // if ( bubbles.length > 10 ) {
  //   bubbles.splice(0, 1)
  // }
}

function fixedBubblesNum() {
  for (let i = 0; i < bubblesAmount; i++) {
    let r = random(10)
    let y = random(height) - r
    let x = random(width) - r
    bubbles[i] = new Bubble(x, y, r)
  }
}

function mouseDragged () {
  let r = 20
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b)
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if ( bubbles[i].onHover(mouseX, mouseY) ) {
        bubbles.splice(i, 1)
    }
  }
}
