const lineDOM = document.getElementById('line-width')
const cnvCleanDOM = document.getElementById('clean-cnv')
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeH = window.innerHeight
const sizeW = window.innerWidth
const colorLine = '#fff'
let lineWidth = 0.01
let noClean = false

let debug = false
const debugColor = '#f00'

const directions = [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
const finalSize = 30
let startSteps
const offset = 12
const tileStep = (sizeW - offset * 2) / 15
const startSize = tileStep

canvas.width = sizeW
canvas.height = sizeH

const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const randomDirection = () => directions[Math.floor(Math.random() * directions.length)]

const drawSquare = (x, y, w, h, xmov, ymov, steps) => {
    context.lineWidth = lineWidth
    context.lineCap = 'round'
    context.strokeStyle = debug ? debugColor : colorLine

    context.beginPath()
    context.rect(x, y, w, h)
    context.stroke()

    if (steps >= 0) {
        const newSize = startSize * (steps / startSteps) + finalSize
        let newX = x + (w - newSize) * 0.5
        let newY = y + (h - newSize) * 0.5
        newX -= ((x - newX) / (steps + lineWidth * 1.25)) * xmov
        newY -= ((y - newY) / (steps + lineWidth * 1.25)) * ymov

        drawSquare(newX, newY, newSize, newSize, xmov, ymov, steps - 1)
    }
}

const drawTiles = () => {
    for (let y = tileStep; y < sizeH - tileStep; y += tileStep) {
        for (let x = offset; x < sizeW - tileStep; x += tileStep) {
            startSteps = 2 + Math.floor(Math.random() * 6)
            const xdir = randomDirection()
            const ydir = randomDirection()

            drawSquare(x, y, startSize, startSize, xdir, ydir, startSteps - 1)
        }
    }
}

const main = () => {
    lineDOM.innerHTML = lineWidth
    cnvCleanDOM.innerHTML = noClean ? 'On' : 'Off'

    if (!noClean) {
        clearCanvas(context, canvas)
    }
    drawTiles()
}

const handleLineWeight = (evt) => {
    switch (evt.key) {
        case '1':
            lineWidth = 0.05
            return 1
        case '2':
            lineWidth = 0.1
            return 1
        case '3':
            lineWidth = 0.2
            return 1
        case '4':
            lineWidth = 0.4
            return 1
        case '5':
            lineWidth = 0.7
            return 1
        case '6':
            lineWidth = 1
            return 1
        case '7':
            lineWidth = 1.4
            return 1
        case '8':
            lineWidth = 1.8
            return 1
        case '9':
            lineWidth = 2.4
            return 1
        case '0':
            lineWidth = 3.6
            return 1
        case 'c':
        case 'r':
            clearCanvas(context, canvas)
            return 1
        case 'n':
            noClean = !noClean
            return 1
        case 's':
            let image = canvas.toDataURL('image/png', 0.5).replace('image/png', 'image/octet-stream')
            window.location.href = image
            return
        default:
            lineWidth = 0.01//1.618
            break
    }
}

main()

document.addEventListener('keyup', (e) => {
    const clicked = handleLineWeight(e)
    if (clicked) main()
})
