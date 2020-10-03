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

function testLines () {
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
            line(0, 0, 0, CRYSTAL_SIZE * 0.5)
            rotate(angle)
        }
    pop()
}

function outlineShape () {
    const strokeColor = getRandomFromPalette()
    const border = randomSelectTwo() ? 1 : 3
    const withHexagon = randomSelectTwo()

    stroke(strokeColor)
    strokeWeight(border)

    push()
        noFill()
        translate(width * 0.5, height * 0.5)
        withHexagon ? hexagon(0, 0, CRYSTAL_SIZE * 0.5) : ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    pop()
}

function simpleLines () {
    const stepsOut = 8
    const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
    const step = (CRYSTAL_SIZE * 0.5) / numSteps
    const start = floor(random(numSteps))
    const stop = floor(random(start, numSteps + 1))

    const border = randomSelectTwo() ? 1 : 3
    const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    const strokeColor = getRandomFromPalette()

    const angle = 360 / numShapes

    noFill()
    stroke(strokeColor)
    strokeWeight(border)
    push()
        translate(width * 0.5, height * 0.5)

        for (let i = 0; i < numShapes; i++) {
            // line(0, 0, 0, CRYSTAL_SIZE * 0.5)
            line(start * step, 0, stop * step, 0)
            rotate(angle)
        }
    pop()
}

function circCircles () {
    const numShapes = SIDES
    const angle = 360 / numShapes
    const shapeSize = (CRYSTAL_SIZE * 0.5) * 0.93
    const pos = (CRYSTAL_SIZE * 0.5) - (shapeSize * 0.5)
    const strokeColor = getRandomFromPalette()

    noFill()
    stroke(strokeColor)
    strokeWeight(1)

    push()
        translate(width * 0.5, height * 0.5)

        for (let i = 0; i <= numShapes; i++) {
            ellipse(pos, 0, shapeSize, shapeSize)
            rotate(angle)
        }
    pop()
}

function draw () {
    // testLines()
    let picker = random(1)
    if (picker > 0.3) outlineShape()
    picker = random(1)
    if (picker > 0.3) simpleLines()
    picker = random(1)
    if (picker > 0.3) circCircles()
}
