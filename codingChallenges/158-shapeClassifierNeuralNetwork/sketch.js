const circles = []
const squares = []
const triangles = []

// Check processing sketch and go to web editor
// https://editor.p5js.org/learodrigo/sketches/06hpVJvA4

let shapeClassifier

function preload () {
  for (let i = 0; i < 100; i++) {
    const num = nf(i + 1, 4, 0)

    circles[i] = loadImage(`data/circle${num}.png`)
    squares[i] = loadImage(`data/square${num}.png`)
    triangles[i] = loadImage(`data/triangle${num}.png`)
  }
}

function setup () {
  createCanvas(400, 400)
  background(255)

  const options = {
    inputs: [64, 64, 4],
    task: 'imageClassification',
    debug: true
  }

  shapeClassifier = ml5.neuralNetwork(options)

  for (let i = 0; i < circles.length; i++) {
    shapeClassifier.addData({ image: circles[i] }, { label: 'circle' })
    shapeClassifier.addData({ image: squares[i] }, { label: 'square' })
    shapeClassifier.addData({ image: triangles[i] }, { label: 'triangle' })
  }

  shapeClassifier.normalizeData()

  shapeClassifier.train({ epochs: 50 }, () => {
    console.log('Training finished')
    shapeClassifier.save()
  })
}
