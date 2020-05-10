const dropsNum = 250
let drops = []

function setup() {
  createCanvas(600, 400)
  for (let i = 0; i < dropsNum; i++) {
    drops[i] = new Drop()
  }
}

function draw() {
  background(230, 230, 250)
  for (let d of drops) {
    d.show()
    d.fall()
  }
}
