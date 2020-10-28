let angle = 0

function setup () {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    fill('#fff')
}

function draw () {
    background('#000')
    const x = width
    const dia = 90
    const num = 100

    translate(width / 2, height / 2)
    for (let a = 0; a < 360; a += 22.5  ) {
        rotate(radians(a))

        push()
            for (let i = 0; i < num; i++) {
                scale(0.95)
                rotate(radians(angle))
                ellipse(x, 0, dia, dia)
            }
        pop()
        push()
            for (let i = 0; i < num; i++) {
                scale(0.95)
                rotate(-radians(angle))
                ellipse(x, 0, dia, dia)
            }
        pop()
    }

    angle += 0.1
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
