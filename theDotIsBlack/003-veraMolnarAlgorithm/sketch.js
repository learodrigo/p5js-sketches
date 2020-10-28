const grid = 50
const margin = 100

let colArray = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    noLoop()
    rectMode(CENTER)
    noFill()
    strokeWeight(grid * 0.02)

    colArray = [
        color(255, 255, 255), // white
        color(200, 5, 20),    // red
        color(55, 188, 25),   // green
        color(15, 35, 250),   // blue
        color(125, 235, 250), // lightblue
        color(240, 245, 15),  // yellow
        color(160, 60, 235)   // purple
    ]
}

function draw() {
    background('#000')

    let d = grid * 0.5

    for (let x = margin; x <= width - margin; x += grid) {
        for (let y = margin; y <= height - margin; y += grid) {
            stroke(random(colArray))

            for (let i = 0; i < colArray.length; i++) {
                let x1 = -random(d)
                let y1 = -random(d)
                let x2 = random(d)
                let y2 = -random(d)
                let x3 = random(d)
                let y3 = random(d)
                let x4 = -random(d)
                let y4 = random(d)

                push()
                translate(x, y)
                quad(x1, y1, x2, y2, x3, y3, x4, y4)
                pop()
            }
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        redraw()
    }

    if (key === 's') {
        save('frames/A_####.jpg')
    }
}
