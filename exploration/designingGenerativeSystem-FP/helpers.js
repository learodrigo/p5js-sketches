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

const layerConstructor = [
    {
        name: 'Centered Shape',
        weight: 0.3,
        init: (props) => centeredShape({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'Circles Shape',
        weight: 0.3,
        init: (props) => circles({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'DottedLines Shape',
        weight: 0.3,
        init: (props) => dottedLines({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'Outline Shape',
        weight: 0.3,
        init: (props) => outlineShape({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'RingOf Shape',
        weight: 0.3,
        init: (props) => ringOfShape({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'SimpleLines Shape',
        weight: 0.3,
        init: (props) => simpleLines({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'SteppedHexagons Shape',
        weight: 0.7,
        init: (props) => steppedHexagons({
            ...props,
            ...setState(state)
        })
    },
    {
        name: 'Test Lines',
        weight: 1,
        init: (props) => testLines({
            ...props,
            ...setState(state),
            hasCircle: false,
            hasLines: false
        })
    }
]

const makeCrystal = (pos) => {
    return layerConstructor.map(layer => {
        const draw = random(1) > layer.weight
        // const draw = layer.name === 'Test Lines'

        return layer.init({
            pos, draw
        })
    })
}

const drawCrystal = (crystal) => {
    crystal.forEach(layer => {
        if (layer.state.draw) {
            push()
                translate(layer.state.pos.x, layer.state.pos.y)
                layer.render()
            pop()
        }
    })
}
