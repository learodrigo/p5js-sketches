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

function randomSelectTwo () {
    return random(1) > 0.5
}

function drawBaseLines () {
    const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    const strokeColor = getRandomFromPalette()

    push()
        noFill()
        stroke(PALETTE[0])
        strokeWeight(5)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

        const angle = 360 / numShapes
        stroke(strokeColor)
        strokeWeight(1)

        for (let i = 0; i < numShapes; i++) {
            line(0, 0, 0, CRYSTAL_SIZE / 2)
            rotate(angle)
        }
    pop()
}

function getRandomFromPalette () {
    const rando = floor(random(PALETTE.length))
    return PALETTE[rando]
}

function draw () {
    drawBaseLines()
}
