const state = {
    sides: SIDES,
    stepsOut: 8,
    thinStroke: CRYSTAL_SIZE * 0.005,
    thickStroke: CRYSTAL_SIZE * 0.01
}

const setState = (state) => {
    state.numShapes = state.sides,
    state.angle = 360 / state.numShapes,
    state.singleStep = (CRYSTAL_SIZE * 0.5) / state.stepsOut,
    state.layerColor = getRandomFromPalette()
    return state
}

const circles = (state) => {
    state.shapeSize = (CRYSTAL_SIZE * 0.5) * 0.93
    state.pos = (CRYSTAL_SIZE * 0.5) - (state.shapeSize * 0.5)

    return ({
        name: 'Circles Shape',
        render: () => {
            noFill()
            stroke(state.layerColor)
            strokeWeight(state.thinStroke)

            push()
                for (let i = 0; i <= state.numShapes; i++) {
                    ellipse(state.pos, 0, state.shapeSize, state.shapeSize)
                    rotate(state.angle)
                }
            pop()
        }
    })
}

const centeredShape = (state) => {
    state.randomShape = random(1)
    state.shapeSize = floor(random(state.stepsOut * 0.5, state.stepsOut - 2)) * state.singleStep

    return ({
        name: 'Centered Shape',
        render: () => {
            noFill()
            noStroke()

            push()
                if (state.randomShape < 0.1) {
                    rect(0, 0, state.shapeSize * 2, state.shapeSize * 2)
                }
                else if (state.randomShape >= 0.1 && state.randomShape < 0.6) {
                    ellipse(0, 0, state.shapeSize * 2, state.shapeSize * 2)
                }
                else {
                    rotate(state.angle * 0.5)
                    hexagon(0, 0, state.shapeSize)
                }
            pop()
        }
    })
}

const dottedLines = (state) => {
    state.numShapes = randomSelectTwo() ? state.sides : state.sides * 2
    state.angle = 360 / state.numShapes
    state.shapeSize = 3
    state.centerOffset = state.singleStep

    return ({
        name: 'Dotted Lines Shape',
        render: () => {
            noFill()
            noStroke()

            push()
                for (let i = 0; i <= state.numShapes; i++) {
                    for (let x = state.centerOffset; x < CRYSTAL_SIZE * 0.5; x += state.singleStep) {
                        rect(x, 0, state.shapeSize, state.shapeSize)
                    }
                    rotate(state.angle)
                }
            pop()
        }
    })
}

const outlineShape = (state) => {
    state.border = randomSelectTwo() ? state.thinStroke : state.thickStroke
    state.withHexagon = randomSelectTwo()

    return ({
        name: 'Outline Shape',
        render: () => {
            noFill()
            stroke(state.layerColor)
            strokeWeight(state.border)

            push()
                state.withHexagon ? hexagon(0, 0, CRYSTAL_SIZE * 0.5) : ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
            pop()
        }
    })
}

const ringOfShape = (state) => {
    state.border = randomSelectTwo() ? state.thinStroke : state.thickStroke
    state.steps = floor(random(1, state.stepsOut))
    state.center = state.steps * state.singleStep
    state.randomShape = random(1)
    state.direction = randomSelectTwo()
    state.fillColor = randomSelectTwo() ? state.layerColor : color(0, 1)

    if (state.steps < state.stepsOut / 2) {
        state.radius = floor(random(1, state.steps)) * state.singleStep
    }
    else if (state.steps > state.stepsOut / 2) {
        state.radius = floor(random(1, state.stepsOut - state.steps)) * state.singleStep
    }
    else {
        state.radius = floor(random(1, (state.stepsOut / 2) + 1)) * state.singleStep
    }

    return ({
        name: 'Ring Of Shape',
        render: () => {
            noFill()
            stroke(state.layerColor)
            strokeWeight(state.border)

            push()
                for (let i = 0; i < state.numShapes; i++) {
                    if (state.randomShape < 0.33) {
                        ellipse(0, state.center, state.radius, state.radius)
                    }
                    else if (state.randomShape >= 0.33 && state.randomShape < 0.66) {
                        rect(0, state.center, state.radius, state.radius)
                    }
                    else {
                        myTriangle(state.center, state.radius, state.direction)
                    }
                    rotate(state.angle)
                }
            pop()
        }
    })
}

const simpleLines = (state) => {
    state.border = randomSelectTwo() ? state.thinStroke : state.thickStroke
    state.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    state.numSteps = randomSelectTwo() ? state.stepsOut : int(state.stepsOut * 1.25)
    state.step = (CRYSTAL_SIZE * 0.5) / state.numSteps
    state.start = floor(random(state.numSteps))
    state.stop = floor(random(state.start, state.numSteps + 1))

    return ({
        name: 'Simple Lines Shape',
        render: () => {
            noFill()
            stroke(state.layerColor)
            strokeWeight(state.border)

            push()
                for (let i = 0; i < state.numShapes; i++) {
                    line(state.start * state.step, 0, state.stop * state.step, 0)
                    rotate(state.angle)
                }
            pop()
        }
    })
}

const steppedHexagons = (state) => {
    state.numSteps = randomSelectTwo() ? state.stepsOut : state.stepsOut * 1.25
    state.centerOffset = (CRYSTAL_SIZE * 0.5) * 0.15
    state.singleStep = ((CRYSTAL_SIZE * 0.5) - state.centerOffset) / state.numSteps
    state.border = randomSelectTwo() ? state.thinStroke : state.thickStroke

    return ({
        name: 'Stepped Hexagons Shape',
        render: () => {
            noFill()
            stroke(state.layerColor)
            strokeWeight(state.border)

            push()
                rotate(state.angle * 0.5)

                for (let i = 1; i < state.numSteps + 1; i++) {
                    hexagon(0, 0, state.centerOffset + (i * state.singleStep))
                }
            pop()
        }
    })
}
