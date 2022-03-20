// https://www.jasondavies.com/poisson-disc/
// https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf

// Limit of samples to chose before rejection in the algorithm: It'll try to do sth this amount of timit before quitting
const k = 30
// Distance between samples
const r = 4
// width/height of each cell of the grid = r / sqrt n
const w = r / Math.sqrt(2)

const TIMES_PER_FRAME = 100
const STROKE = 1

let cols
let rows

let active = []
let grid = []
let ordered = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB)

  // Filling the grid with dummy data
  cols = floor(width / w)
  rows = floor(height / w)
  for (let i = 0; i < cols * rows; i++) {
    grid[i] = undefined
  }

  // Pick a random point to start
  let x = width / 2 //random(width)
  let y = height / 2 //random(height)
  let i = floor(x / w)
  let j = floor(y / w)
  let pos = createVector(x, y)
  grid[i + j * cols] = pos
  active.push(pos)
}

function draw() {
  background(0)

  for (let total = 0; total < TIMES_PER_FRAME; total++) {
    // To view the animation
    // Remove noLoop and change WHILE -> IF
    // noLoop()

    // Condition for creation
    // while (active.length) {
    if (active.length) {
      // Pick random values from the active list
      let randomIndex = floor(random(active.length))
      let pos = active[randomIndex]
      let found = false
      // Pick k times values
      for (let n = 0; n < k; n++) {
        // Where the value's between the active point to an area from r and pow2
        // away from the active value. It's like a donut around active point
        // For doing this, we create a random vector and
        // multiply for the correct d
        let sample = p5.Vector.random2D()
        let m = random(r, r * 2)
        sample.setMag(m)
        sample.add(pos)

        let col = floor(sample.x / w)
        let row = floor(sample.y / w)

        // We also need to check if there's a value in the picked cell
        // and 0 <= col <= cols
        // and 0 <= row <= rows
        if (
          col >= 0 &&
          col <= cols &&
          row >= 0 &&
          row <= rows &&
          !grid[col * row * cols]
        ) {
          // Then I check if there are points in the next cells
          let ok = true
          // From left to right 1 cell
          for (let i = -1; i <= 1; i++) {
            // From top to bottom 1 cell
            for (let j = -1; j <= 1; j++) {
              let index = col + i + (row + j) * cols
              let neighbor = grid[index]
              // Checking the distance if it has a value
              if (neighbor) {
                let d = p5.Vector.dist(sample, neighbor)
                if (d < r) {
                  ok = false
                }
              } // if neighbor
            } // j
          } // i

          if (ok) {
            found = true
            grid[col + row * cols] = sample
            active.push(sample)
            ordered.push(sample)
            break
          }
        }
      } // n < k

      if (!found) {
        active.splice(randomIndex, 1)
      }
    } // active.length
  } // times per frame

  // Grid
  // for (let i = 0; i < grid.length; i++) {
  //   if (grid[i]) {
  //     // stroke(i / 360, 360, 360)
  //     stroke(255)
  //     strokeWeight(STROKE)
  //     point(grid[i].x, grid[i].y)
  //   }
  // }

  // Ordered
  for (let i = 0; i < ordered.length; i++) {
    if (ordered[i]) {
      stroke(i % 360, 100, 100)
      // stroke(255)
      strokeWeight(STROKE)
      point(ordered[i].x, ordered[i].y)
    }
  }

  // Active
  for (let i = 0; i < active.length; i++) {
    stroke(255, 0, 255)
    strokeWeight(STROKE)
    point(active[i].x, active[i].y)
  }
}
