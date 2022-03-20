const createCleanBoard = () => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]

const board = createCleanBoard()
const cell = 200
const players = ["o", "x"]

let currentPlayer,
  available = []

function setup() {
  createCanvas(600, 600)

  currentPlayer = floor(random(players.length))

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      available.push([i, j])
    }
  }
}

function nextTurn() {
  const index = floor(random(available.length))
  const spot = available.splice(index, 1)[0]

  const i = spot[0]
  const j = spot[1]

  board[i][j] = players[currentPlayer]
  currentPlayer = (currentPlayer + 1) % players.length
}

function equals3(a, b, c) {
  return a === b && b === c && a !== ""
}

function checkWinner() {
  let winner = null

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0]
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i]
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0]
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0]
  }

  if (winner === null && available.length === 0) {
    return "tie"
  } else {
    return winner
  }
}

function draw() {
  background(220)

  strokeWeight(2)
  stroke(30, 10, 255)
  line(cell, 0, cell, height)
  line(cell * 2, 0, cell * 2, height)
  line(0, cell, width, cell)
  line(0, cell * 2, width, cell * 2)

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      const spot = board[i][j]
      const x = i * cell
      const y = j * cell

      noFill()

      if (spot === players[0]) {
        ellipseMode(CORNER)
        strokeWeight(4)
        stroke(0)
        circle(x, y, cell)
      } else if (spot === players[1]) {
        strokeWeight(6)
        stroke(0)
        line(x, y, x + cell, y + cell)
        line(x + cell, y, x, y + cell)
      }
    }
  }

  let result = checkWinner()

  if (result) {
    noLoop()
    console.log(`${result} wins`)
  }

  nextTurn()
}
