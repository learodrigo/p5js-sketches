class Particle {
    constructor (x, y, splitCount) {
        this.age = 0
        this.pos = new p5.Vector(x, y)
        this.splitCount = splitCount
        this.vel = p5.Vector.random2D()
        this.vel.mult(map(this.splitCount, 0, maxSplitCount, 5, 2))
    }

    move () {
        this.vel.mult(0.9)
        this.pos.add(this.vel)

        if (this.age % 10 == 0 && this.splitCount > 0) {
            particles.push(new Particle(this.pos.x, this.pos.y, --this.splitCount))
        }

        this.age++
    }
}
