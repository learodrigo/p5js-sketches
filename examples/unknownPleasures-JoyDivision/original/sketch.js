/***************************************************************
  Unknown Pleasures

  Curves constructed from the actual data from the first
  recorded radio pulsar, PSR B1919+21. Artist Peter Saville
  saw the image in The Cambridge Encyclopaedia of Astronomy,
  and presented a few options to the band. Bernard Sumner
  chose PSR B1919+21, and the rest is history.

  CSV file contains 80 lines, each containing 300 data points.

  License: http://unlicense.org/
***************************************************************/

let data

function preload () {
    data = loadStrings("pulsar.csv")
}

function setup () {
    createCanvas(900, 900)
    background(0)
    stroke(255)
    strokeWeight(2.5)
    fill(0)

    for (let y = 0; y < data.length; y++) {
        const points = float(split(data[y],','))

        beginShape()

            for (let x = 0; x < points.length; x++) {
                vertex(150 + 2 * x, -80 + height - (8 * (79 - y) + 2 * points[x]))
            }

        endShape()
    }
}

function keyPressed () {
    if (key === ' ') {
        save()
    }
}
