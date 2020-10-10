const bgCleanerDOM = document.getElementById('background-clear')
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeH = 550//window.innerHeight
const sizeW = 550//window.innerWidth
let lineWidth = 8
const colorLine = '#0a0a0a'
let bgCleaner = false

let debug = false
const debugColor = '#f00'

const step = sizeW / 10
const white = '#F2F5F1'
// red, blue, yellow, black
const colors  = ['#D40920', '#1356A2', '#F7D842', '#0a0a0a', '#0a0a0a']

canvas.style.marginTop = '50px'

canvas.width = sizeW
canvas.height = sizeH

const squares = [{
    x: lineWidth * 0.5,
    y: lineWidth * 0.5,
    w: sizeW - lineWidth,
    h: sizeH - lineWidth
}]

const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const drawSquare = (squares) => {
    for (let i = 0; i < colors.length; i++) {
        squares[Math.floor(Math.random() * squares.length)].color = colors[i]
    }

    for (let i = 0; i < squares.length; i++) {
        const ele = squares[i]
        const spacing = lineWidth * 0.2

        context.beginPath()
        context.rect(ele.x, ele.y, ele.w / spacing, ele.h / spacing)

        if (squares[i].color) {
            context.fillStyle = squares[i].color
        } else {
            context.fillStyle = white
        }

        context.lineWidth = lineWidth
        context.strokeStyle = debug ? debugColor : colorLine
        context.fill()
        context.stroke()
    }
}

const splitOnX = (square, splitAt) => {
    const sqA = {
        x: square.x,
        y: square.y,
        w: square.w - (square.w - splitAt + square.x),
        h: square.h
    }
    const sqB = {
        x: splitAt,
        y: square.y,
        w: square.w - splitAt + square.x,
        h: square.h
    }

    squares.push(sqA)
    squares.push(sqB)
}

const splitOnY = (square, splitAt) => {
    const sqA = {
        x: square.x,
        y: square.y,
        w: square.w,
        h: square.h  - (square.h - splitAt + square.y)
    }
    const sqB = {
        x: square.x,
        y: splitAt,
        w: square.w,
        h: square.h - splitAt + square.y
    }

    squares.push(sqA)
    squares.push(sqB)
}

const splitSquaresWith = (coors) => {
    const { x, y } = coors

    for (let i = squares.length - 1; i >= 0; i--) {
        const square = squares[i]
        if (x && x > square.x && x < square.x + square.w) {
            if (Math.random() > 0.5) {
                squares.splice(i, 1)
                splitOnX(square, x)
            }
        }
        if (y && y > square.y && y < square.y + square.h) {
            if (Math.random() > 0.5) {
                squares.splice(i, 1)
                splitOnY(square, y)
            }
        }
    }
}

const handleLineWeight = (evt) => {
    switch (evt.key) {
        case '1':
            lineWidth = 1
            return 1
        case '2':
            lineWidth = 2
            return 1
        case '3':
            lineWidth = 4
            return 1
        case '4':
            lineWidth = 6
            return 1
        case '5':
            lineWidth = 7
            return 1
        case '6':
            lineWidth = 8
            return 1
        case '7':
            lineWidth = 9
            return 1
        case '8':
            lineWidth = 10
            return 1
        case '9':
            lineWidth = 11
            return 1
        case '0':
            lineWidth = 0.00000001
            return 1
        case 'c':
        case 'r':
            clearCanvas(context, canvas)
            return 1
        case 'n':
            bgCleaner = !bgCleaner
            return 1
        case 's':
            let image = canvas.toDataURL('image/png', 0.5).replace('image/png', 'image/octet-stream')
            window.location.href = image
            return
        default:
            lineWidth = 8
            break
    }
}

const main = () => {
    bgCleanerDOM.innerHTML = bgCleaner ? 'On' : 'Off'

    if (bgCleaner) {
        clearCanvas(context, canvas)
    }

    for (let i = 0; i < sizeW; i += step) {
        splitSquaresWith({ x: i })
        splitSquaresWith({ y: i })
    }

    drawSquare(squares)
}

main()

document.addEventListener('keyup', (e) => {
    if (handleLineWeight(e)) {
        main()
    }
})
