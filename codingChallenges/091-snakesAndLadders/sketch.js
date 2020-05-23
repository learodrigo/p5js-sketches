/**
 * Attempt to create a simulation of the classic board game Snakes & Ladders (also known as Chutes and Ladders)
 *
 * https://en.wikipedia.org/wiki/Snakes_and_Ladders
 */

const ROLL_STATE = 0
const MOVE_STATE = 1
const SNADDER_STATE = 2

let state = ROLL_STATE

let player
let tiles = []
let res = 20

// Simulation
let index = 0
let rolls = []
let averageRolls = 0

let avgP

function setup() {
  createCanvas(windowWidth, windowHeight - 8)
  avgP = createP('')

  frameRate(5)

  // Initiazing
  rolls[index] = 0

  /*
   * Set up the board
   */
  let cols = width / res
  let rows = height / res

  // First spot
  let x = 0
  let y = (rows - 1) * res
  let dir = 1

  for (let i = 0; i < cols * rows; i++) {
    let tile = new Tile(x, y, res, i, i + 1)
    tiles.push(tile)

    x += (res * dir)
    // Move up and left or up and right
    if (x >= width || x <= -res) {
      dir *= -1
      x += res * dir
      y -= res
    }
  }

  // Adding snakes
  for (let i = 0; i < 5; i++) {
    let index = floor(random(cols, tiles.length))
    tiles[index].snadders = -1 * floor(random(index % cols, index - 1))
  }

  // Adding snakes
  for (let i = 0; i < 5; i++) {
    let index = floor(random(0, tiles.length - cols))
    tiles[index].snadders = floor(random(cols - (index % cols), tiles.length - index - 1))
  }

  /*
   * Player
   */
  player = new Player()
}

function draw() {
  background(0)

  // Board
  for (let tile of tiles) {
    tile.show()
  }
  // Snake and Ladders
  for (let tile of tiles) {
    tile.showSnadders()
  }

  // Player
  if (state === ROLL_STATE) {
    player.rollDie()
    rolls[index]++
    player.showPreview()
    state = MOVE_STATE

  } else  if (state === MOVE_STATE) {
    player.move()
    state = player.isSnadder() ? SNADDER_STATE : ROLL_STATE

  } else if (state === SNADDER_STATE) {
    player.moveSnadder()
    state = ROLL_STATE
  }

  let gameOver = false
  if (player.spot >= tiles.length - 1) {
    player.spot = tiles.length - 1
    gameOver = true
  }

  player.show()

  if (gameOver) {
    index++
    rolls[index] = 0
    player.reset()
  }

  let sum = 0
  for (let i = 0; i < rolls.length - 1; i++) {
    sum += rolls[i]
  }
  let avg = sum / (rolls.length - 1)
  if (avg) avgP.html(avg)
}
