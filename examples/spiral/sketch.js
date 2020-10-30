const points = [];

function setup () {
    createCanvas(windowWidth, windowHeight, WEBGL)
    colorMode(HSB, 360, 100, 100)
    strokeWeight(3)
}

function draw () {
    background(0)

    const angle = frameCount * 0.13 * TWO_PI
    const s = height * 0.045 * pow(frameCount, 0.5)
    const x = sin(angle) * s
    const y = cos(angle) * s
    const p = createVector(x, y)
    points.push(p)

    beginShape()
        points.forEach(p => {
            fill(random(12, 36), 100, 100)
            curveVertex(p.x, p.y)
        })
    endShape(CLOSE)

    if (frameCount === 97) {
        noLoop()
    }
}
