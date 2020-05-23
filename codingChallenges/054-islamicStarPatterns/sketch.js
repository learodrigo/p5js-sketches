/**
 * Work through visualizing Islamic Star Patterns based on a Waterloo University Paper
 *
 * http://www.cgl.uwaterloo.ca/csk/projects/starpatterns/
 * http://paulbourke.net/geometry/pointlineplane/
 * https://www.youtube.com/watch?v=FBn6VgoF3fE
 * https://twitter.com/gabrielweymouth/status/826890126747906048
 * https://en.wikipedia.org/wiki/Law_of_sines
 */

let polys = []

let angle = 75
let delta = 10

let deltaSlider, angleSlider

function setup() {
  createCanvas(650, 400)

  createP('Delta is the gap in the edge intersection')
  deltaSlider = createSlider(0, 25, 10)
  createP('Change the angle from the delta point')
  angleSlider = createSlider(0, 90, 60)

  const inc = 50
  for (let x = 0; x < width; x += inc) {
    for (let y = 0; y < height; y += inc) {
      let poly = new Polygon(10)
      poly.addVertex(x, y)
      poly.addVertex(x + inc, y)
      poly.addVertex(x + inc, y + inc)
      poly.addVertex(x, y + inc)
      poly.close()
      polys.push(poly)
    }
  }
}

function draw() {
  background(255)

  angle = angleSlider.value()
  delta = deltaSlider.value()

  for (let p of polys) {
    p.hankin()
    p.show()
  }
}
