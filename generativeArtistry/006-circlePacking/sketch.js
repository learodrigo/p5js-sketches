const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeH = window.innerHeight
const sizeW = window.innerWidth
const colorLine = '#fff'
const lineWidth = 1

let debug = false
const debugColor = '#f00'

const circles = []
const minRadius = 2
const maxRadius = 100
const totalCircles = 500
const createCircleAttemps = 500

context.lineCap = 'round'
context.lineWidth = lineWidth
context.strokeStyle = colorLine

canvas.width = sizeW
canvas.height = sizeH

const clearCanvas = (context, canvas) => {
    canvas.width = canvas.width
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const showCircle = (c) => {
    context.lineCap = 'round'
    context.lineWidth = lineWidth
    context.strokeStyle = debug ? debugColor : colorLine

    context.beginPath()
    context.arc(c.x, c.y, c.radius, 0, Math.PI * 2)
    context.stroke()
}

const doesCircleHaveACollision = (circle) => {
    for (let i = 0; i < circles.length; i++) {
        const otherCircle = circles[i]
        const a = circle.radius + otherCircle.radius
        const x = circle.x - otherCircle.x
        const y = circle.y - otherCircle.y

        if (a >= Math.sqrt((x * x) + (y * y)) ||
            circle.x + circle.radius >= sizeW || circle.x - circle.radius <= 0 ||
            circle.y + circle.radius >= sizeH || circle.y - circle.radius <= 0
        ) {
            return true
        }

    }

    return false
}

const addCircle = () => {
    let circle
    let circleSafeToDraw = false

    for (let tries = 0; tries < createCircleAttemps; tries++) {
        circle = {
            x: Math.floor(Math.random() * sizeW),
            y: Math.floor(Math.random() * sizeH),
            radius: minRadius
        }

        if (doesCircleHaveACollision(circle)) {
            continue
        } else {
            circleSafeToDraw = true
            break
        }
    }

    if (!circleSafeToDraw) {
        return
    }

    for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
        circle.radius = radiusSize
        if (doesCircleHaveACollision(circle)) {
            circle.radius--
            break
        }
    }

    circles.push(circle)


    for (let i = 0; i < circles.length; i++) {
        showCircle(circles[i])
    }
}

const createAllCircles = () => {
    for (let i = 0; i < totalCircles; i++) {
        addCircle()
    }
}

const main = () => {
    clearCanvas(context, canvas)
    createAllCircles()
}

main()
