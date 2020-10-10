const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeH = window.innerHeight
const sizeW = window.innerWidth
const colorLine = '#000'
const lineWidth = 7

let debug = false
const debugColor = '#f00'

const gap = sizeW / 14
const lines = []
const offset = sizeW * 0.125

let line = []
let odd = false

canvas.width = sizeW
canvas.height = sizeH


const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const createGrid = () => {
    for (let y = gap * 0.5; y <= sizeH - (gap * 0.5); y += gap) {
        line = []
        odd = !odd

        for (let x = gap * 0.5; x <= sizeW + gap * 6; x += gap) {
            const dx = x + (Math.random() * 0.8 - 0.4) * gap + (odd ? gap * 0.5 : 0)
            const dy = y + Math.random() * 0.8 * gap * 0.5
            line.push({ x: dx, y: dy })

            if (debug) {
                context.strokeStyle = debugColor
                context.fillStyle = debugColor
                context.beginPath();
                context.arc(dx, dy, 3, 0, Math.PI * 2, true);
                context.fill();
            }
        }

        lines.push(line)
    }
}

const drawTriangle = (pa, pb, pc) => {
    context.lineJoin = 'bevel'
    context.beginPath()
    context.moveTo(offset + pa.x,  pa.y)
    context.lineTo(offset + pb.x,  pb.y)
    context.lineTo(offset + pc.x,  pa.y)
    context.lineTo(offset + pa.x,  pc.y)
    context.closePath()

    const grayscale = Math.floor(Math.random() * 17).toString(16)
    context.fillStyle = '#' + grayscale + grayscale + grayscale
    context.strokeStyle = debug ? debugColor : colorLine
    context.lineWidth = lineWidth
    context.fill()
    context.stroke()
}

const drawGrid = () => {
    let dotLine
    odd = true

    for (let i = 0; i < lines.length - 1; i++) {
        odd = !odd
        dotLine = []

        for (let j = 0; j < lines[i].length; j++) {
            dotLine.push(odd ? lines[i + 0][j] : lines[i + 1][j])
            dotLine.push(odd ? lines[i + 1][j] : lines[i + 0][j])
        }

        for (let j = 0; j < lines[i].length - 2; j++) {
            drawTriangle(dotLine[j], dotLine[j + 1], dotLine[j + 2])
        }
    }
}

const main = () => {
    clearCanvas(context, canvas)
    createGrid()
    drawGrid()
}

main()
