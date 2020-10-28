const dia = 400, sw = 10
let x, y

function setup () {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    noFill()
    stroke('#fff')
    strokeWeight(sw)
    x = width / 2
    y = height / 2
}

function draw () {
    background('#000')

    rect(x, y, dia, dia)

    x += random(-10, 10)
    y += random(-10, 10)

    x = constrain(x, dia / 2 + sw / 2, width - dia / 2 - sw / 2)
    y = constrain(y, dia / 2 + sw / 2, height - dia / 2 - sw / 2)
}

function keyPressed() {
    if (key === ' ') {
        redraw()
    }

    if (key === 'n') {
        noLoop()
    }

    if (key === 's') {
        save('frames/rotateScaleFor-001jpg')
    }
}
