const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeH = window.innerHeight
const sizeW = window.innerWidth
const colorLine = '#fff'
const lineWidth = 1

let debug = false
const debugColor = '#f00'

const step = 20
const aThirdHeight = null//sizeH / 3
const aForthHeight = sizeH / 4

canvas.width = sizeW
canvas.height = sizeH

const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const setLines = (x, y, w, h, pos) => {
    context.save()
    context.translate(x + w * 0.5, y + h * 0.5)
    context.rotate(Math.random() * 5)
    context.translate(-w * 0.5, -h * 0.5)

    for (let i = 0; i < pos.length; i++) {
        context.lineCap = 'round'
        context.lineWidth = lineWidth
        context.strokeStyle = colorLine
        context.beginPath()
        context.moveTo(pos[i] * w, 0)
        context.lineTo(pos[i] * w, h)
        context.stroke()
    }

    context.restore()
}

const third = (x, y) => {
    if (y < aThirdHeight) {
        setLines(x, y, step, step, [0.5])
    } else if (y < aThirdHeight * 2) {
        setLines(x, y, step, step, [0.25, 0.5, 0.75])
    } else {
        setLines(x, y, step, step, [0.125, 0.25, 0.5, 0.75, 0.95])
    }
}

const forth = (x, y) => {
    if (y < aForthHeight) {
        setLines(x, y, step, step, [0.5])
    } else if (y < aForthHeight * 2) {
        setLines(x, y, step, step, [0.25, 0.5, 0.75])
    } else if (y < aForthHeight * 3) {
        setLines(x, y, step, step, [0.125, 0.25, 0.5, 0.75, 0.95])
    } else {
        setLines(x, y, step, step, [0.125, 0.25, 0.5, 0.625, 0.75, 0.95])
    }
}

const drawLines = () => {
    for (let y = step; y <= sizeH - (step * 2); y += step) {
        for (let x = step; x <= sizeW - (step * 2); x += step) {
            if (aThirdHeight) third(x, y)
            if (aForthHeight) forth(x, y)
        }
    }
}

const main = () => {
    clearCanvas(context, canvas)
    drawLines()
}

main()
