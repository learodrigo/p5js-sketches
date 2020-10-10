const canvas = document.querySelector('canvas')
const lineWidthDOM = document.getElementById('line-width')
const context = canvas.getContext('2d')
const sizeW = window.innerWidth
const sizeH = window.innerHeight
const colorLine = '#fff'

const squareSize = 50
const randomDisplacement = 15
const rotateMultiplier = 20
const offset = 10
let lineWidth = 2

canvas.width = sizeW
canvas.height = sizeH
context.lineCap = 'square'

const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const plusOrMinus = () => Math.random() > 0.5 ? -1 : 1

const drawSquare = (w, h, c) => {
    context.beginPath()
    context.lineWidth = lineWidth
    context.rect(-w * 0.5, -h * 0.5, w, h)
    context.strokeStyle = c
    context.stroke()
}

const drawGrid = (color, e) => {
    clearCanvas(context, canvas)
    lineWidthDOM.innerHTML = lineWidth

    for (let x = squareSize; x <= sizeW - squareSize * 2; x += squareSize) {
        for (let y = squareSize * 2; y <= sizeH - squareSize * 2; y += squareSize) {
            const rotateAmt = y / sizeW * Math.PI / 180 * plusOrMinus() * Math.random() * rotateMultiplier
            const translateAmt = y / sizeW * plusOrMinus() * Math.random() * rotateMultiplier

            context.save()
                if (e && e.key === 'c') {
                    context.rotate(rotateAmt)
                    context.translate(x + translateAmt + offset, y + offset * plusOrMinus())
                } else if (e && e.key === 'a') {
                    context.translate(x + translateAmt + offset, y + translateAmt + offset * plusOrMinus())
                    context.rotate(rotateAmt * offset)
                } else {
                    context.translate(x + translateAmt + offset, y + offset)
                    context.rotate(rotateAmt)
                }

                drawSquare(squareSize, squareSize, color)
            context.restore()
        }
    }
}

const handleLineWeight = (evt) => {
    switch (evt.key) {
        case '1':
            lineWidth = 1
            break
        case '2':
            lineWidth = 3
            break
        case '3':
            lineWidth = 4
            break
        case '4':
            lineWidth = 6
            break
        case '5':
            lineWidth = 8
            break
        case '6':
            lineWidth = 10
            break
        case '7':
            lineWidth = 12
            break
        case '8':
            lineWidth = 14
            break
        case '9':
            lineWidth = 16
            break
        case '0':
            lineWidth = 20
            break
        case 'a':
        case 'c':
        case 'r':
            break
        default:
            lineWidth = 2
            break
    }
}

const main = () => {
    drawGrid(colorLine)
    document.addEventListener('keyup', evt => {
        handleLineWeight(evt)
        drawGrid(colorLine, evt)
    })
}

main()
