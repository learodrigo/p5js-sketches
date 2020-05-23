/**
 * Steering behaviours
 *
 * TODO: Check font methods and play araound
 * http://www.red3d.com/cwr/steer/
 */

let font

let vehicles = []

function preload () {
  font = loadFont('AvenirNextLTPro-Demi.otf')
}
function setup () {
  createCanvas(600, 400)
  background(0)
  textFont(font)

  // p5.Font.textToPoints returns an array of objects
  // of the vertexes of a giving string
  let points = font.textToPoints('Steering', 30, 200, 128)
  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    let vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
  }
  points = font.textToPoints('behavior', 30, 280, 128)
  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    let vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
  }
}

function draw () {
  background(0)
  for (let v of vehicles) {
    v.behaviors()
    v.update()
    v.show()
  }
}
