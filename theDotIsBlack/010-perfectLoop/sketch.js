const diam = 20
const x = 200
const y = 200
let angle = 90

function setup () {
    createCanvas(windowWidth, windowHeight)
    stroke(255)
    strokeWeight(3)
}

function draw () {
    background(0)

    translate(width / 2, height / 2)
    rotate(angle / 3)

    for (let a = 0; a < 360; a += 10) {
        push()
            if (angle < 360) {
                rotate(radians(a) * cos(radians(angle)))
            } else {
                rotate(radians(a))
            }

            line(x * sin(radians(angle)), 0, 0, y - diam / 2)

            noStroke()
            fill(255)
            ellipse(x * sin(radians(angle)), 0, diam / 2, diam / 2)
            noFill()
            stroke(255)
            ellipse(0, y, diam, diam)
        pop()
    }

    angle++
}

function keyPressed () {
    if (key === ' ') {
        redraw()
    }

    if (key === 's') {
        save()
    }
}
