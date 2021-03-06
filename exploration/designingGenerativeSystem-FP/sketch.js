const CRYSTAL_SIZE = 150
const SIDES = 6

// layout
const COLUMNS = 5
const MARGIN = CRYSTAL_SIZE * 0.5
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const ROWS = 4
const START = (CRYSTAL_SIZE * 0.5) + MARGIN

let PALETTE = []
const crystals = []

function setup () {
    const totalX = START + GRIDBOX * COLUMNS
    const totalY = START + GRIDBOX * ROWS

    createCanvas(totalX, totalY, SVG)

    PALETTE = [
        color(255, 52, 154), // pink
        color(4, 0 , 152)    // blue
    ]

    angleMode(DEGREES)
    rectMode(CENTER)
    noLoop()
}

function draw () {
    for (let x = 0; x < COLUMNS; x++) {
        for (let y = 0; y < ROWS; y++) {
            const posX = (x * GRIDBOX) + START
            const posY = (y * GRIDBOX) + START
            crystals.push(makeCrystal({x: posX, y: posY}))
        }
    }

    crystals.forEach(c => drawCrystal(c))
}
