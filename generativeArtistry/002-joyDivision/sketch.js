const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeW = window.innerWidth * 0.5
const sizeH = window.innerHeight
const colorLine = '#fff'

const step = 20
const lines = []

canvas.width = sizeW
canvas.height = sizeH
context.lineCap = 'square'
context.lineWidth = 1.618

const createLines = () => {
    for (let i = step; i <= sizeH - step; i += step) {
        const line = []

        for (let j = step; j <= sizeW - step; j += step) {
            const distToCenter = Math.abs(j - sizeW * 0.5)
            const variance = Math.max(sizeW * 0.5 - (step * 7) - distToCenter, 0)
            const rdm = Math.random() * variance * -0.9
            const point = { x: j, y: i + rdm }

            line.push(point)
        }

        lines.push(line)
    }
}

const drawLines = (color) => {
    for (let i = 4; i < lines.length - 1; i++) {
        context.beginPath()
        context.moveTo(lines[i][0].x, lines[i][0].y)

        for (let j = 0; j < lines[i].length - 1; j++) {
            const xc = (lines[i][j].x + lines[i][j + 1].x) * 0.5
            const yc = (lines[i][j].y + lines[i][j + 1].y) * 0.5

            context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc)
        }

        context.save()
            context.globalCompositeOperation = 'destination-out'//'xor'
            context.fillStyle = color
            context.fill()
        context.restore()

        context.strokeStyle = color
        context.stroke()
    }
}

const main = () => {
    createLines()
    drawLines(colorLine)
}

main()
