let a = 0
let sponge = []
let b

function setup() {
  createCanvas(400, 400, WEBGL)
  b = new Box(0, 0, 0, 200)
  sponge.push(b)
}

function mousePressed () {

  // Generate the next set of boxes
  let next = []
  for (let i = 0; i < sponge.length; i++) {
    let b = sponge[i]
    let newBoxes = b.generate()
    next = next.concat(newBoxes)
  }
  sponge = next
}

function draw() {
  background(25)
  lights()

  rotateX(a)
  rotateY(a * 0.4)
  rotateZ(a * 0.1)
  for (let i = 0; i < sponge.length; i++) {
    sponge[i].show()
  }

  a += 0.01
}
