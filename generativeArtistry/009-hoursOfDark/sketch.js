const CANVAS = document.querySelector("canvas")
const CONTEXT = CANVAS.getContext("2d")

const CANVAS_SIZE = window.innerHeight
const DPR = window.devicePixelRatio

CANVAS.width = CANVAS_SIZE * DPR
CANVAS.height = CANVAS_SIZE * DPR

const GOLDEN_RATIO = 1.61803
const COLS = 23
const ROWS = 16
const DAYS = 365
// COLS * ROWS = 368 - 365 = 3
const LEFT_OVER = 3

const TILE_W = GOLDEN_RATIO
const TILE_H = GOLDEN_RATIO * ROWS

const GRID_W = CANVAS_SIZE
const GRID_H = CANVAS_SIZE / GOLDEN_RATIO

const CELL_W = GRID_W / COLS
const CELL_H = GRID_H / ROWS

const MARGIN_X = (CANVAS_SIZE - GRID_W) * 0.5
const MARING_Y = (CANVAS_SIZE - GRID_H) * 0.5

CONTEXT.scale(DPR, DPR)

for (let i = 0; i < DAYS + LEFT_OVER; i++) {
  const col = Math.floor(i / ROWS)
  const row = i % ROWS

  const x = MARGIN_X + col * CELL_W
  const y = MARING_Y + row * CELL_H

  CONTEXT.save()
  CONTEXT.translate(x, y)

  CONTEXT.beginPath()
  CONTEXT.rect(0, 0, CELL_W, CELL_H)
  CONTEXT.clip()

  CONTEXT.translate(CELL_W / GOLDEN_RATIO, CELL_H / GOLDEN_RATIO)

  const phi = (i / DAYS) * Math.PI
  const theta = Math.sin(phi) * Math.PI * 0.5 + 0.75

  CONTEXT.rotate(theta)

  const scale = Math.abs(Math.cos(phi)) * 2 + GOLDEN_RATIO

  CONTEXT.scale(scale, 1)

  CONTEXT.beginPath()
  CONTEXT.rect(
    TILE_W / -GOLDEN_RATIO,
    TILE_H / -GOLDEN_RATIO,
    TILE_W * GOLDEN_RATIO,
    TILE_H * GOLDEN_RATIO
  )
  CONTEXT.fill()

  CONTEXT.restore()
}
