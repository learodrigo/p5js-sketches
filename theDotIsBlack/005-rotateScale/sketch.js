let angle = 0

function setup () {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    stroke(10, 15, 30)
    strokeWeight(25)
    fill(255, 255, 255)
}

function draw () {
    background(10, 15, 30)
    translate(width / 2, height / 2)

    let scaleVar = map(mouseX, 0, width, 0.5, 10)
    scale(scaleVar)

    for (let i = 0; i < 122; i++) {
        if (key === ' ') {
            fill(255, 255, 255)
        }
        if (key === 'r') {
            fill(i * 10, 25, 10)
        }
        if (key === 'm') {
            fill(i * 10, 255 - i * 25, 255 - i * 10)
        }
        scale(0.9)
        rotate(radians(angle))
        rect(0, 0, 600, 600)
    }

    angle+=0.1
}

function keyPressed() {
    if (key === ' ') {
        redraw()
    }

    if (key === 'n') {
        noLoop()
    }

    if (key === 's') {
        save('frames/rotateScale-001jpg')
    }
}
