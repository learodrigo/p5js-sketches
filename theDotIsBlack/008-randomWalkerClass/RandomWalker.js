class RandomWalker {
    constructor (_xStep, _yStep) {
        this.x1 = width / 2
        this.x2 = width / 2
        this.y1 = height / 2
        this.y2 = height / 2
        this.rOff = 0
        this.xStep = _xStep
        this.yStep = _yStep
    }

    update () {
        this.x1 += random(-this.xStep, this.xStep)
        this.y1 += random(-this.yStep, this.yStep)
        this.x2 += random(-this.xStep, this.xStep)
        this.y2 += random(-this.yStep, this.yStep)

        this.x1 = constrain(this.x1, 0, width)
        this.y1 = constrain(this.y1, 0, height)
        this.x2 = constrain(this.x2, 0, width)
        this.y2 = constrain(this.y2, 0, height)

        this.rOff += 0.05
        const black = noise(this.rOff) * 255
        stroke(black)
        line(this.x1, this.y1, this.x2, this.y2)
    }
}
