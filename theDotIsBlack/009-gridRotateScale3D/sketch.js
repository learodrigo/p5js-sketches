let mx, my
let angle = 0
let grid = 400
let scaleVar = 1

let change = true

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    rectMode(CENTER)
    fill(255, 0, 0)
    noStroke()

    mx = (width - floor(width / (grid * 2)) * grid * 2) / 2
    my = (height - floor(height / (grid * 2)) * grid * 2) / 2
}

function draw() {
    background(0)

    scaleVar = lerp(scaleVar, map(mouseX, 0, width, 0.1, 2.5), 0.1)
    scale(scaleVar)

    for (let x = mx + grid - width / 2; x <= width / 2 - mx; x += grid * 2) {
        for (let y = my + grid - height / 2; y <= height / 2 - my; y += grid * 2) {
            push()
                translate(x, y)

                // top left
                push()
                    translate(-grid / 2, -grid / 2)
                    rotateX(radians(angle))
                    rotateY(-radians(angle))
                    rect(0, 0, grid, grid)
                pop()

                // top right
                push()
                    translate(grid / 2, -grid / 2)
                    rotateY(radians(angle))
                    rotateX(-radians(angle))
                    rect(0, 0, grid, grid)
                pop()

                // bottom left
                push()
                    translate(-grid / 2, grid / 2)
                    rotateY(radians(angle))
                    rotateX(radians(angle))
                    rect(0, 0, grid, grid)
                pop()

                // bottom right
                push()
                    translate(grid / 2, grid / 2)
                    rotateX(-radians(angle))
                    rotateY(-radians(angle))
                    rect(0, 0, grid, grid)
                pop()
            pop()
        }
    }

    angle += 1

    if (angle >= 180) {
        grid = grid <= 20 ? 400 : grid / 2
        angle = 0
    }
}

function keyPressed() {
    if (key === ' ') {
        change = !change

        if (change) {
            // square ratio
            my = (height - floor(width / (grid * 2)) * grid * 2) / 2
        } else {
            // any ratio
            my = (height - floor(height / (grid * 2)) * grid * 2) / 2
        }

        redraw()
    }

    if (key === 'n') {
        noLoop()
    }

    if (key === 's') {
        save('frames/rotateScaleFor-001jpg')
    }
}
