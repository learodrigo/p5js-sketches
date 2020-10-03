class Layer {
    constructor () {
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360 / this.numShapes
        this.stepsOut = 8
        this.singleStep = (CRYSTAL_SIZE * 0.5) / this.stepsOut
        this.strokeColor = getRandomFromPalette()
        this.thinStroke = 1
        this.thickStroke = 3
    }
}

class Circles extends Layer {
    constructor () {
        super()
        this.shapeSize = (CRYSTAL_SIZE * 0.5) * 0.93
        this.pos = (CRYSTAL_SIZE * 0.5) - (this.shapeSize * 0.5)
    }

    render () {
        noFill()
        stroke(this.strokeColor)
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
    constructor () {
        super()
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
        this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
        this.step = (CRYSTAL_SIZE * 0.5) / this.numSteps
        this.start = floor(random(this.numSteps))
        this.stop = floor(random(this.start, this.numSteps + 1))
    }

    render () {
        noFill()
        stroke(this.strokeColor)
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
    constructor () {
        super()
        this.border = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.withHexagon = randomSelectTwo()
    }

    render () {
        stroke(this.strokeColor)
        strokeWeight(this.border)

        push()
            noFill()
            translate(width * 0.5, height * 0.5)
            this.withHexagon ? hexagon(0, 0, CRYSTAL_SIZE * 0.5) : ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        pop()
    }
}
