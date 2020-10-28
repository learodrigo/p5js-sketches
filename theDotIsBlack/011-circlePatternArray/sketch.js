let colorCounter = 0
let colArray

function setup () {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    // noLoop()
    frameRate(15)

    colArray =[
        color(25, 165, 190),
        color(95, 170, 200),
        color(120, 190, 210),
        color(170, 210, 230),
        color(205, 225, 245),
        color(220, 240, 250)
    ]
}

function draw () {
    background(0)

    translate(width / 2, height / 2)

    const rSteps = 8
    const rMax = floor(height / 2 - 10)
    const rMin = 0//mouseX

    for (let r = rMin; r < rMax; r += rSteps) {
        const c = 2 * PI * r
        const cSegment = map(r, 0, rMax, rSteps * 3 / 4, rSteps / 2)
        const aSegment = floor(c / cSegment)
        const radius = map(r, 0, rMax, rSteps * 3 / 4, rSteps / 4)

        for (let a = 0; a < 360; a += 360 / aSegment) {
            colorCounter++
            if (colorCounter === colArray.length) colorCounter = 0

            fill(colArray[colorCounter])

            push()
                rotate(radians(a))
                ellipse(r, 0, radius, radius)
            pop()
        }
    }
}

function keyPressed () {
    if (key === ' ') {
        redraw()
    }

    if (key === 's') {
        save()
    }
}
