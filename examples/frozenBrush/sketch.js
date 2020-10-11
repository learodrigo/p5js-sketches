// Ideas to do
// Change it to rainbow colors! 🌈
// Change the particle system to get different kind of motion.
// Automate how particles are spawned.
// Instead of Delaunay Triangulation use something else to display the particles. Maybe try voronoi?
// Have forces and collisions effect the particles.
// Convert this to work in 3d space (now that would look cool!).


const maxSplitCount = 3
const particles = []
let useFill = true

function setup() {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 360)
    noFill()
    stroke(255, 100)
    strokeWeight(0.5)
}

function draw() {
    background(0)

    for (let i = particles.length - 1; i > -1; i--) {
        const p = particles[i]
        p.move()

        if (p.vel.mag() < 0.01) {
            particles.splice(i, 1)
        }
    }

    if (particles.length > 0) {
        let data = Delaunay.triangulate(
            particles.map(pt => [pt.pos.x, pt.pos.y])
        )

        strokeWeight(0.5)
        let distThresh = 75

        for (let i = 0; i < data.length; i += 3) {
            const p1 = particles[data[i + 0]]
            const p2 = particles[data[i + 1]]
            const p3 = particles[data[i + 2]]

            if (
                p1.pos.dist(p2.pos) > distThresh ||
				p2.pos.dist(p3.pos) > distThresh ||
                p1.pos.dist(p3.pos) > distThresh
            ) {
                continue
            }

            const pCol = color(165 + p1.age * 1.5, 360, 360)

            useFill ? fill(pCol) : noFill()
            stroke(pCol)

            triangle(
                p1.pos.x, p1.pos.y,
                p2.pos.x, p2.pos.y,
                p3.pos.x, p3.pos.y
            )
        }
    }
}

function keyPressed() {
    useFill = !useFill
}

function mouseDragged() {
    if (frameCount % 4 === 0) {
        particles.push(new Particle(mouseX, mouseY, maxSplitCount))
    }
}
