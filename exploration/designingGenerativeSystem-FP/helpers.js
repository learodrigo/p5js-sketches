const getRandomFromPalette = () => {
    const rando = floor(random(PALETTE.length))
    return PALETTE[rando]
}

const hexagon = (posX, posY, radius) => {
    const rotAngle = 360 / SIDES

    beginShape()
        for (let i = 0; i < SIDES; i++) {
            const v = pointOnCircle(posX, posY, radius, i * rotAngle)
            vertex(v.x, v.y)
        }
    endShape(CLOSE)
}

const myTriangle = (center, radius, dir) => {
    if (dir) {
        beginShape()
            vertex(center + radius * cos(0), radius * sin(0))
            vertex(center + radius * cos(120), radius * sin(120))
            vertex(center + radius * cos(240), radius * sin(240))
        endShape(CLOSE)
    } else {
        beginShape()
            vertex(center + radius * cos(180), radius * sin(180))
            vertex(center + radius * cos(300), radius * sin(300))
            vertex(center + radius * cos(60), radius * sin(60))
        endShape(CLOSE)
    }
}

const pointOnCircle = (posX, posY, radius, angle) => {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

const randomSelectTwo = () => {
    return random(1) > 0.5
}

const testLines = (state) => {
    state.numShapes = randomSelectTwo() ? SIDES : SIDES * 2

    return ({
        name: 'Test Lines',
        render: () => {
            noFill()
            stroke(PALETTE[0])
            strokeWeight(1)

            push()
                translate(width * 0.5, height * 0.5)
                ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

                const angle = 360 / state.numShapes
                stroke(state.layerColor)
                strokeWeight(1)

                for (let i = 0; i < state.numShapes; i++) {
                    line(0, 0, 0, CRYSTAL_SIZE * 0.5)
                    rotate(angle)
                }
            pop()
        }
    })
}

const layerConstructor = [
    {
        name: 'Centered Shape',
        weight: 0.3,
        init: () => new CenteredShape()
    },
    {
        name: 'Circles Shape',
        weight: 0.3,
        init: () => new Circles()
    },
    {
        name: 'SimpleLines Shape',
        weight: 0.3,
        init: () => new SimpleLines()
    },
    {
        name: 'Outline Shape',
        weight: 0.3,
        init: () => new OutlineShape()
    },
    {
        name: 'DottedLines Shape',
        weight: 0.3,
        init: () => new DottedLines()
    },
    {
        name: 'RingOf Shape',
        weight: 0.3,
        init: () => new RingOfShape()
    },
    {
        name: 'SteppedHexagons Shape',
        weight: 0.7,
        init: () => new SteppedHexagons()
    }
]
