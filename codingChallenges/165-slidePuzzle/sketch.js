let source, w, h

const ROWS = 3
const COLS = 3
const board = []
const tiles = []
let blankSpot = -1

const basicShuffle = (array) => array.sort(() => Math.random() - 0.5)

const findBlank = () => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i
  }
}

const swap = (i, j, arr) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const isNeighbor = (i, j, x, y) => {
  // Same row & col
  if (i !== x && j !== y) return false
  // top, bottom, left, right
  return abs(i - x) == 1 || abs(j - y) == 1
}

const move = (i, j) => {
  const blankIndex = findBlank(board)
  const blankCol = blankIndex % COLS
  const blankRow = floor(blankIndex / ROWS)

  if (isNeighbor(i, j, blankCol, blankRow)) {
    swap(blankIndex, i + j * COLS, board)
  }
}

function preload() {
  source = loadImage("image.jpeg")
}

function setup() {
  createCanvas(640, 640)
  source.resize(640, 640)

  w = width / COLS
  h = height / ROWS

  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const x = i * w
      const y = j * h
      const img = createImage(w, h)

      img.copy(source, x, y, w, h, 0, 0, w, h)

      const index = i + j * COLS
      const tile = new Tile(index, img)

      board.push(index)
      tiles.push(tile)
    }
  }

  tiles.pop()
  board.pop()
  board.push(-1)

  basicShuffle(board)
}

function mousePressed() {
  let x = floor(mouseX / w)
  let y = floor(mouseY / h)
  move(x, y, board)
}

function draw() {
  background(0)

  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const index = i + j * COLS
      const x = i * w
      const y = j * h
      const tileIndex = board[index]

      if (tileIndex >= 0) {
        const img = tiles[tileIndex].img
        image(img, x, y)
      }

      noFill()
      stroke(0)
      rect(x, y, w, h)
    }
  }
}
