let lines = []
const step = 20;

function createLines () {
    lines = []

    for (let y = step; y <= height - step * 2; y += step) {
        const line = []

        for (let x = step; x <= width - step * 2; x += step) {
            const distToCenter = abs(x - width * 0.5)
            const variance = max(width * 0.5 - (step * 3) - distToCenter, 0.1)
            const rdm = random() * variance * -0.3
            const point = { x: x + step, y: y + rdm  + step * 2}

            line.push(point)
        }

        lines.push(line)
    }

    return lines
}

function drawLines (lines) {
    for (let y = 0; y < lines.length - 2; y++) {

        for (let x = 0; x < lines[y].length - 1; x++) {
            const xc = (lines[y][x].x + lines[y][x + 1].x) * 0.5
            const yc = (lines[y][x].y + lines[y][x + 1].y) * 0.5

            strokeWeight(1)
            line(lines[y][x].x, lines[y][x].y, xc, yc)

            strokeWeight(4)
            if (random() > 0.6) {
                stroke(255, 10)
                point(lines[y][x].x, lines[y][x].y)
            } else if (random() > 0.3) {
                stroke(255, 30)
                point(xc, yc)
            } else {
                stroke(255, 15)
                point(lines[y][x].x, lines[y][x].y)
                point(xc, yc)
            }
        }
    }
}

function setup () {
    createCanvas(500, 700, P2D)
    background(0)
    stroke(255)
    strokeWeight(2)
    createLines()
    noFill()
    frameRate(10)
}

function main (rdm) {
    if (rdm) {
        createLines()
    }

    drawLines(lines)
}

function draw () {
    background(0, 20)

    main(random() > 0.4)
    main(random() > 0.6)
    main(true)

}

function keyPressed () {
    if (key === ' ') {
        saveFrames('unknown-pleasures-####', 'png', 1, 1)
    }
}

function mousePressed () {
    background(0)
    redraw()
}
