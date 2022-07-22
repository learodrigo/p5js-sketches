const tiles = []
const tileImages = []
let grid = []

const DIM = 20

function preload() {
  // tiles/demo
  // const path = "tiles/demo"
  // tileImages[0] = loadImage(`${path}/blank.png`)
  // tileImages[1] = loadImage(`${path}/up.png`)

  for (let i = 0; i < 13; i++) {
    const path = random() > 0.5 ? "tiles/circuit" : "tiles/circuit-coding-train"
    tileImages.push(loadImage(`${path}/${i}.png`))
  }
}

function createGrid() {
  // Create cell for each spot on the grid
  for (let i = 0; i < DIM * DIM; i++) {
    grid[i] = new Cell(tiles.length)
  }
}

function setup() {
  createCanvas(800, 800)

  // Create tiles/demo
  // tiles[0] = new Tile(tileImages[0], [0, 0, 0, 0])
  // tiles[1] = new Tile(tileImages[1], [1, 1, 0, 1])
  // tiles[2] = tiles[1].rotate(1)
  // tiles[3] = tiles[1].rotate(2)
  // tiles[4] = tiles[1].rotate(3)

  tiles[0] = new Tile(tileImages[0], ["AAA", "AAA", "AAA", "AAA"])
  tiles[1] = new Tile(tileImages[1], ["BBB", "BBB", "BBB", "BBB"])
  tiles[2] = new Tile(tileImages[2], ["BBB", "BCB", "BBB", "BBB"])
  tiles[3] = new Tile(tileImages[3], ["BBB", "BDB", "BBB", "BDB"])
  tiles[4] = new Tile(tileImages[4], ["ABB", "BCB", "BBA", "AAA"])
  tiles[5] = new Tile(tileImages[5], ["ABB", "BBB", "BBB", "BBA"])
  tiles[6] = new Tile(tileImages[6], ["BBB", "BCB", "BBB", "BCB"])
  tiles[7] = new Tile(tileImages[7], ["BDB", "BCB", "BDB", "BCB"])
  tiles[8] = new Tile(tileImages[8], ["BDB", "BBB", "BCB", "BBB"])
  tiles[9] = new Tile(tileImages[9], ["BCB", "BCB", "BBB", "BCB"])
  tiles[10] = new Tile(tileImages[10], ["BCB", "BCB", "BCB", "BCB"])
  tiles[11] = new Tile(tileImages[11], ["BCB", "BCB", "BBB", "BBB"])
  tiles[12] = new Tile(tileImages[12], ["BBB", "BCB", "BBB", "BCB"])

  // tiles/demo
  const len = tiles.length
  for (let i = 0; i < len; i++) {
    for (let r = 1; r < 4; r++) {
      tiles.push(tiles[i].rotate(r))
    }
  }

  // Generate adjancency rules based on edges
  for (const tile of tiles) {
    // tiles/demo
    // tile.analyze(tiles)
    tile.analyzeReverse(tiles)
  }

  createGrid()
}

function draw() {
  background(54)

  const w = width / DIM
  const h = height / DIM

  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      const cell = grid[i + j * DIM]

      if (cell.collapsed) {
        const index = cell.options[0]
        image(tiles[index].img, i * w, j * h, w, h)
      } else {
        noFill()
        stroke(51)
        rect(i * w, j * h, w, h)
      }
    }
  }

  let gridCopy = grid.slice()
  gridCopy = gridCopy.filter((a) => !a.collapsed)

  if (gridCopy.length == 0) return

  gridCopy.sort((a, b) => a.options.length - b.options.length)

  const len = gridCopy[0].options.length
  let stopIndex = 0
  for (let i = 1; i < gridCopy.length; i++) {
    if (gridCopy[i].options.length > len) {
      stopIndex = i
      break
    }
  }

  if (stopIndex > 0) gridCopy.splice(stopIndex)

  const cell = random(gridCopy)
  cell.collapsed = true

  const pick = random(cell.options)

  // 0 can be a valid pick
  if (pick === undefined) {
    createGrid()
    return
  }

  cell.options = [pick]

  const nextGrid = []
  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      const index = i + j * DIM

      if (grid[index].collapsed) {
        nextGrid[index] = grid[index]
      } else {
        const options = new Array(tiles.length).fill(0).map((_, i) => i)

        // Looks up
        if (j > 0) {
          let validOptions = []
          const up = grid[i + (j - 1) * DIM]
          for (const option of up.options) {
            const valid = tiles[option].down
            validOptions = validOptions.concat(valid)
          }
          checkValid(options, validOptions)
        }

        // Looks right
        if (i < DIM - 1) {
          let validOptions = []
          const right = grid[i + 1 + j * DIM]
          for (const option of right.options) {
            const valid = tiles[option].left
            validOptions = validOptions.concat(valid)
          }
          checkValid(options, validOptions)
        }

        // Looks down
        if (j < DIM - 1) {
          let validOptions = []
          const down = grid[i + (j + 1) * DIM]
          for (const option of down.options) {
            const valid = tiles[option].up
            validOptions = validOptions.concat(valid)
          }
          checkValid(options, validOptions)
        }

        // Looks left
        if (i > 0) {
          let validOptions = []
          const left = grid[i - 1 + j * DIM]
          for (const option of left.options) {
            const valid = tiles[option].right
            validOptions = validOptions.concat(valid)
          }
          checkValid(options, validOptions)
        }

        nextGrid[index] = new Cell(options)
      }
    }
  }

  grid = nextGrid
}

const checkValid = (arr, valid) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!valid.includes(arr[i])) {
      arr.splice(i, 1)
    }
  }
}
