const CRYSTAL_SIZE = 500
const SIDES = 6

let PALETTE = []

function setup () {
    createCanvas(530, 530, SVG)

    PALETTE = [
        color(255, 52, 154), // pink
        color(4, 0 , 152)    // blue
    ]

    angleMode(DEGREES)
    rectMode(CENTER)
    noLoop()
}

function draw () {
    const crystal = new Crystal(width / 2, height / 2)
    crystal.render()
    testLines()
}
