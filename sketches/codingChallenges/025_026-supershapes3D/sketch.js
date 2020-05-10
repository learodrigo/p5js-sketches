// https://www.syedrezaali.com/3d-supershapes/


let total = 50

let globe
let m = 0
let mChange = 0
let a = 1
let b = 1

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  globe = new Array((total + 1) * (total + 1))
}

function supershape (theta, m, n1, n2, n3) {
  let t1 = abs((1 / a) * cos(m * theta / 4))
  t1 = pow(t1, n2)
  let t2 = abs((1 / b) * sin(m * theta / 4))
  t2 = pow(t2, n3)
  let t3 = t1 + t2
  let r = pow(t3, -1 / n1)

  return r
}

function draw() {
  m = map(sin(mChange), -1, 1, 0, 7)
  mChange += 0.02

  background(51)
  stroke(0)
  lights()

  scale(0.5)

  rotateX(mChange * 3)
  rotateY(mChange * 3)

  let r = 300
  for (let i = 0; i < total + 1; i++) {
    let lat = map(i, 0, total, -HALF_PI, HALF_PI)
    let r2 = supershape(lat, m, 0.2, 1.7, 1.7)
    // let r2 = supershape(lat, 2, 10, 10, 10)

    for (let j = 0; j < total + 1; j++) {
      let lon = map(j, 0, total, -PI, PI)

      let r1 = supershape(lon, m, 0.2, 1.7, 1.7)
      // let r1 = supershape(lon, 8, 60, 100, 30)

      let x = r  * r1 * cos(lon)  * r2 * cos(lat)
      let y = r  * r1 * sin(lon)  * r2 * cos(lat)
      let z = r  * r2 * sin (lat)

      let index = i + j * (total + 1)

      globe[index] = createVector(x, y, z)
    }
  }

  for (let i = 0; i < total; i++) {
    beginShape(TRIANGLE_STRIP)
    for (let j = 0; j < total + 1; j++) {
      let index1 = i + j * (total + 1)
      let v1 = globe[index1]
      vertex(v1.x, v1.y, v1.z)
      let index2 = (i + 1) + j * (total + 1)
      let v2 = globe[index2]
      vertex(v2.x, v2.y, v2.z)
    }
    endShape()
  }
}
