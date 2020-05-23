/**
 * I attempt to create a version of the classic one-line Commodore 64 BASIC program in JavaScript using p5.js. This coding challenge is inspired by the book 10 PRINT
 *
 * 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
 * Fun Fact: The C64 character set is called PETSCII, from the prior Commodore Pet. It’s interesting because unlike ASCII, it’s full of graphics!
 *
 * https://massmoca.org/sol-lewitt/
 * https://en.wikipedia.org/wiki/PETSCII
 */

let x = 0
let y = 0
let spacing = 10

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  stroke(255)
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing)
  } else {
    line(x, y + spacing, x + spacing, y)
  }

  x += spacing
  if (x > width) {
    x = 0
    y += spacing
  }

  if (y > height) {
    print('Done')
    noLoop()
  }
}
