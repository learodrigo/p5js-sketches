/**
 * I attempt to create a version of the classic one-line Commodore 64 BASIC program in JavaScript using p5.js. This coding challenge is inspired by the book 10 PRINT
 *
 * 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
 * Fun Fact: The C64 character set is called PETSCII, from the prior Commodore Pet. It’s interesting because unlike ASCII, it’s full of graphics!
 *
 * https://massmoca.org/sol-lewitt/
 * https://en.wikipedia.org/wiki/PETSCII
 */

const COLS = 20

let x = 0
let y = 0
let spacing

function setup() {
	createCanvas(windowWidth, windowHeight)
	spacing = floor(width / COLS / 1.618)
	strokeCap(PROJECT)
	background(0)
}

function draw() {
	let weight = spacing * 1.618 * 0.5
	strokeWeight(weight)
	stroke(255, 20)

	for (let i = 0; i < 500; i++) {
		random(1) < 0.5
			? line(x, y, x + spacing, y + spacing)
			: line(x, y + spacing, x + spacing, y)

		x += spacing

		if (x > width) {
			x = 0
			y += spacing
		}

		if (y > height) {
			console.log('Done')
			noLoop()
			return
		}
	}
}
