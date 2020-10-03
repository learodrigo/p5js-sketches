function getRandomFromPalette () {
    const rando = floor(random(PALETTE.length))
    return PALETTE[rando]
}

function hexagon (posX, posY, radius) {
    const rotAngle = 360 / SIDES

    beginShape()
        for (let i = 0; i < SIDES; i++) {
            const v = pointOnCircle(posX, posY, radius, i * rotAngle)
            vertex(v.x, v.y)
        }
    endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function randomSelectTwo () {
    return random(1) > 0.5
}
