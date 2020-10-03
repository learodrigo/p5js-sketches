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

function createLayers () {
    layerConstructor.forEach(layer => {
        if (random(1) > layer.weight) {
            layers.push(layer.init())
        }
    })
}

function renderLayers () {
    layers.forEach(layer => {
        layer.render()
    })
}

function draw () {
    testLines()
    createLayers()
    renderLayers()
}
