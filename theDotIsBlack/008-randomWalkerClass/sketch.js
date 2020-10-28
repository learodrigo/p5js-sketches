const walkers = []

function setup () {
    createCanvas(windowWidth, windowHeight)
    stroke(255)
    strokeWeight(3)
    background(0)
    for (let i = 0; i < 10; i++) {
        walkers.push(new RandomWalker(random(10), random(10)))
    }
}

function draw () {
    for (let i = 0; i < 100; i++) {
        walkers.forEach(w => {
            w.update()
        })
    }
}

function keyPressed() {
    if (key === ' ') {
        redraw()
    }

    if (key === 'n') {
        noLoop()
    }

    if (key === 's') {
        save()
    }
}
