class Layer {
    constructor() {
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360 / this.numShapes
        this.stepsOut = 8
        this.singleStep = (CRYSTAL_SIZE * 0.5) / this.stepsOut
        this.layerColor = getRandomFromPalette()
        this.thinStroke = 1
        this.thickStroke = 3
    }
}

class Circles extends Layer {
    constructor() {
        super()
        this.shapeSize = (CRYSTAL_SIZE * 0.5) * 0.93
        this.pos = (CRYSTAL_SIZE * 0.5) - (this.shapeSize * 0.5)
    }

    render() {
        noFill()
        stroke(this.layerColor)
        strokeWeight(this.thinStroke)

        push()
        translate(width * 0.5, height * 0.5)

        for (let i = 0; i <= this.numShapes; i++) {
            ellipse(this.pos, 0, this.shapeSize, this.shapeSize)
            rotate(this.angle)
        }
        pop()
    }
}

class SimpleLines extends Layer {
    constructor() {
        super()
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
        this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
        this.step = (CRYSTAL_SIZE * 0.5) / this.numSteps
        this.start = floor(random(this.numSteps))
        this.stop = floor(random(this.start, this.numSteps + 1))
    }

    render() {
        noFill()
        stroke(this.layerColor)
        strokeWeight(this.border)
        push()
        translate(width * 0.5, height * 0.5)

        for (let i = 0; i < this.numShapes; i++) {
            line(this.start * this.step, 0, this.stop * this.step, 0)
            rotate(this.angle)
        }
        pop()
    }
}

class OutlineShape extends Layer {
    constructor() {
        super()
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.withHexagon = randomSelectTwo()
    }

    render() {
        stroke(this.layerColor)
        strokeWeight(this.border)

        push()
        noFill()
        translate(width * 0.5, height * 0.5)
        this.withHexagon ? hexagon(0, 0, CRYSTAL_SIZE * 0.5) : ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        pop()
    }
}

class DottedLines extends Layer {
    constructor() {
        super()
        this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
        this.angle = 360 / this.numShapes
        this.shapeSize = 3
        this.centerOffset = this.singleStep
    }

    render() {
        fill(this.layerColor)
        noStroke()
        push()
        translate(width * 0.5, height * 0.5)
        for (let i = 0; i <= this.numShapes; i++) {
            for (let x = this.centerOffset; x < CRYSTAL_SIZE * 0.5; x += this.singleStep) {
                rect(x, 0, this.shapeSize, this.shapeSize)
            }
            rotate(this.angle)
        }
        pop()
    }
}

class CenteredShape extends Layer {
    constructor() {
        super()
        this.randomShape = random(1)
        this.shapeSize = floor(random(this.stepsOut * 0.5, this.stepsOut - 2)) * this.singleStep
    }

    render() {
        fill(this.layerColor)
        noStroke()

        push()
        translate(width * 0.5, height * 0.5)

        if (this.randomShape < 0.1) {
            rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        }
        else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
            ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        }
        else {
            rotate(this.angle * 0.5)
            hexagon(0, 0, this.shapeSize)
        }
        pop()
    }
}

class RingOfShape extends Layer {
    constructor() {
        super()
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.steps = floor(random(1, this.stepsOut))
        this.center = this.steps * this.singleStep
        this.randomShape = random(1)
        this.direction = randomSelectTwo()
        this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)

        if (this.steps < this.stepsOut / 2) {
            this.radius = floor(random(1, this.steps)) * this.singleStep
        }
        else if (this.steps > this.stepsOut / 2) {
            this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
        }
        else {
            this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
        }
    }

    render() {
        stroke(this.layerColor)
        fill(this.fillColor)
        strokeWeight(this.border)

        push()
        translate(width * 0.5, height * 0.5)
        for (let i = 0; i < this.numShapes; i++) {
            if (this.randomShape < 0.33) {
                ellipse(0, this.center, this.radius, this.radius)
            }
            else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
                rect(0, this.center, this.radius, this.radius)
            }
            else {
                myTriangle(this.center, this.radius, this.direction)
            }
            rotate(this.angle)
        }
        pop()
    }
}

class SteppedHexagons extends Layer {
    constructor() {
        super()
        this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
        this.centerOffset = (CRYSTAL_SIZE * 0.5) * 0.15
        this.singleStep = ((CRYSTAL_SIZE * 0.5) - this.centerOffset) / this.numSteps
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
    }

    render() {
        noFill()
        stroke(this.layerColor)
        strokeWeight(this.border)

        push()
            translate(width * 0.5, height * 0.5)
            rotate(this.angle * 0.5)
            for (let i = 1; i < this.numSteps + 1; i++) {
                hexagon(0, 0, this.centerOffset + (i * this.singleStep))
            }
        pop()
    }
}
