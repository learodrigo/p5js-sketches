const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const sizeW = window.innerWidth
const sizeH = window.innerHeight
const colorLine = '#fff'

const step = 80

canvas.width = sizeW
canvas.height = sizeH
context.lineCap = 'square'
context.lineWidth = 2

const drawLine = (x, y, w, h, c) => {
	const leftToRight = Math.random() >= 0.5

	if (leftToRight) {
		context.moveTo(x, y)
		context.lineTo(x + w, y + h)
	} else {
		context.moveTo(x + w, y)
		context.lineTo(x, y + h)
	}

	context.strokeStyle = c
	context.stroke()
}

const tenPrint = (color) => {
	for (let x = 0; x < sizeW; x += step) {
		for (let y = 0; y < sizeH; y += step) {
			drawLine(x, y, step, step, color)
		}
	}
}

tenPrint(colorLine)
