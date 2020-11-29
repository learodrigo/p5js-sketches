const yLines = 500
let f = 0

function setup () {
    createCanvas(300, 900)
    noFill()
    stroke(255)
    strokeWeight(1.5)
}

function draw () {
    background(0)

	for (let y = height / 6; y < yLines + 60; y += 10) {
        beginShape()

        for (let x = 0; x < yLines; x++) {
            vertex(x, y - 80 / (1 + pow(x - 150, 4) / 8e6) * noise(x / 50 + f / 75 + y))
        }

		endShape()
    }

    f++
}
