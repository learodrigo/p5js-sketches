const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function drawBaseLines () {
    push()
        noFill()
        stroke(PALETTE[0])
        strokeWeight(5)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        stroke(PALETTE[1])
        strokeWeight(1)
        const angle = 360 / SIDES
        for (let i = 0; i < 6; i++) {
            line(0, 0, 0, CRYSTAL_SIZE / 2)
            rotate(angle)
        }
    pop()
}

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
    drawBaseLines()
}
