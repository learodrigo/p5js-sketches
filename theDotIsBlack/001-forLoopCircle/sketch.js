function setup () {
    createCanvas(windowWidth, windowHeight)
    background('#000')
    rectMode(CENTER)
    strokeCap(CORNER)
    strokeWeight(4)
    noLoop()
}

function draw () {
    for (let x = 50; x < width; x += 100) {
        for (let y = 50; y < height; y += 100) {
            noStroke()
            fill(random(255), random(255), random(255))
            rect(x, y, 100, 100)

            push()
                translate(x, y)
                noFill()
                scale(0.14)

                for (let i = 0; i < 30; i++) {
                    stroke(random(255), random(255), random(255))

                    for (let a = 0; a < 360; a += 1) {
                        push()
                            let x = random(20, 180)
                            let xx = random(180, 340)

                            rotate(radians(a))
                            line(x, 0, xx, 0)
                        pop()
                    }
                }
            pop()
        }
    }
}

function keyPressed () {
    if (keyCode === 83) {
        saveFrames('frames/A_####.jpg')
    }
    redraw()
}
