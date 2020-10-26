let num
const xStep = 10
const yStep = 150

let a = 0, _a = 0
let x = 0, y = 0

function setup () {
    createCanvas(windowWidth, windowHeight)
    background('#000')
    num = floor((width / xStep) * (height / yStep))
}

function draw () {
    background('#000')
    strokeCap(CORNER)
    strokeWeight(xStep)

    let n = 0
    while (n < num) {
        stroke(
            255 - 255 * cos(radians(a)),
            255 - 255 * cos(radians(a)),
            255 - 255 * sin(radians(a)),
            255 - 255 * sin(radians(a))
        )

        line(x, y, x, y + yStep)

        x += xStep

        if (x > width) {
            x = xStep / 2
            y += yStep
        }
        if (y >= height) {
            y = 0
            a = 0
        }

        n++
        a += _a
    }

    _a += 0.1
}

function keyPressed() {
    if (key === ' ') {
        redraw()
    }

    if (key === 'n') {
        noLoop()
    }

    if (keyCode === 83) {
        save('frames/whileLoopColor-001jpg')
    }
}
