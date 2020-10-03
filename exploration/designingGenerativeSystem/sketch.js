const CRYSTAL_SIZE = 500
const SIDES = 6
const layers = []

let PALETTE = []

function setup () {
    createCanvas(530, 530, SVG)

    PALETTE = [
        color(255, 52, 154), // pink
        color(4, 0 , 152)    // blue
    ]

    angleMode(DEGREES)
    rectMode(CENTER)
    noLoop()
}

function layerCollector () {
    if (random(1) > 0.3) layers.push(new CenteredShape())
    if (random(1) > 0.3) layers.push(new OutlineShape())
    if (random(1) > 0.3) layers.push(new SimpleLines())
    if (random(1) > 0.3) layers.push(new Circles())
    if (random(1) > 0.3) layers.push(new DottedLines())
    if (random(1) > 0.3) layers.push(new RingOfShape())
    if (random(1) > 0.3) layers.push(new SteppedHexagons())
}

function renderLayers () {
    layers.forEach(layer => {
        layer.render()
    })
}

function draw () {
    testLines()
    layerCollector()
    renderLayers()
}
