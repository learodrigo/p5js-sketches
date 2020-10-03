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
    testLines()

    let picker = random(1)
    if (picker > 0.3) {
        const outlineShape = new OutlineShape()
        outlineShape.render()
    }

    picker = random(1)
    if (picker > 0.3) {
        const simpleLines = new SimpleLines()
        simpleLines.render()
    }

    picker = random(1)
    if (picker > 0.3) {
        const circles = new Circles()
        circles.render()
    }
}
