let alpha = 0
let sw
let arcSize = 200
let yStep = 10

function setup () {
    createCanvas(windowWidth, windowHeight)
}

function draw () {
    background('#000')

    mouseX = constrain(mouseX, 10, width)
    mouseY = constrain(mouseY, 10, height)

    // yStep = mouseY
    // arcSize = mouseX

    noFill()
    stroke(255)

    // let arcL = map(mouseX, 0, width, 0, TWO_PI)
    for (let y = -arcSize; y < height + arcSize; y += yStep) {
        sw = map(sin(radians(y + alpha)), -1, 1, 1, yStep)
        strokeWeight(sw)

        for (let x1 = arcSize / 2; x1 < width + arcSize; x1 += arcSize) {
            arc(x1, y, arcSize / 2, arcSize / 2, 0, PI)
        }

        sw = map(sin(radians(y - alpha)), -1, 1, 1, yStep)
        strokeWeight(sw)

        for (let x2 = 0; x2 < width + arcSize; x2 += arcSize) {
            arc(x2, y, arcSize / 2, arcSize / 2, PI, TWO_PI)
        }
    }

    alpha+=4
}
