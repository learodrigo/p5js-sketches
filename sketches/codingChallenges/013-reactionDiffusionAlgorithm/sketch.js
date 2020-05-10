// http://www.karlsims.com/rd.html

let grid = []
let next = []

const dA = 1
const dB = 0.5
const feed = 0.055
const k = 0.062

function setup() {
  createCanvas(200, 200)
  pixelDensity(1)

  for (let x = 0; x < width; x++) {
    grid[x] = []
    next[x] = []
    for (let y = 0; y < height; y++) {
      grid[x][y] = {
        a: 1,
        b: 0
      }
      next[x][y] = {
        a: 1,
        b: 0
      }
    }
  }

  for (let i = 90; i < 110; i++) {
    for (let j = 90; j < 110; j++) {
      grid[i][j].b = 1
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j].b = 1
    }
  }

}


function laplaceA(x, y) {
  let sumA = 0
  sumA += grid[x][y].a * -1
  sumA += grid[x - 1][y].a * 0.2
  sumA += grid[x + 1][y].a * 0.2
  sumA += grid[x][y + 1].a * 0.2
  sumA += grid[x][y - 1].a * 0.2
  sumA += grid[x - 1][y - 1].a * 0.05
  sumA += grid[x + 1][y - 1].a * 0.05
  sumA += grid[x + 1][y + 1].a * 0.05
  sumA += grid[x - 1][y + 1].a * 0.05
  return sumA
}

function laplaceB(x, y) {
  let sumB = 0
  sumB += grid[x][y].b * -1
  sumB += grid[x - 1][y].b * 0.2
  sumB += grid[x + 1][y].b * 0.2
  sumB += grid[x][y + 1].b * 0.2
  sumB += grid[x][y - 1].b * 0.2
  sumB += grid[x - 1][y - 1].b * 0.05
  sumB += grid[x + 1][y - 1].b * 0.05
  sumB += grid[x + 1][y + 1].b * 0.05
  sumB += grid[x - 1][y + 1].b * 0.05
  return sumB
}



function swap() {
  let temp = grid
  grid = next
  next = temp
}


function draw() {
  background(51)

  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      let a = grid[x][y].a
      let b = grid[x][y].b
      next[x][y].a = a +
        (dA * laplaceA(x, y)) -
        (a * b * b) +
        (feed * (1 - a))

      next[x][y].b = b +
        (dB * laplaceB(x, y)) +
        (a * b * b) -
        ((k + feed) * b)

      next[x][y].a = constrain(next[x][y].a, 0, 1)
      next[x][y].b = constrain(next[x][y].b, 0, 1)
    }
  }


  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pix = (x + y * width) * 4
      let a = next[x][y].a
      let b = next[x][y].b
      let c = floor((a - b) * 255)
      c = constrain(c, 0, 255)
      pixels[pix + 0] = c
      pixels[pix + 1] = c
      pixels[pix + 2] = c
      pixels[pix + 3] = 255
    }
  }
  updatePixels()

  swap()
}
