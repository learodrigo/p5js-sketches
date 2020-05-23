/**
 * Discuss binary numbers and make an interactive binary to decimal number converter
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

let decimalP

let num = '10110110'
let byte = []

function setup() {
  createCanvas(500, 100)
  decimalP = select('#decimal')

  let w = width / 8
  for (let i = 0; i < 8; i++) {
    byte[i] = new Bit(w / 2 + i * w, height / 2, w - 8)
    byte[i].setState(num.charAt(i))
  }
}

function draw() {
  background(0)

  decimalP.html(binaryToDecimal(num))

  num =  ''
  for (let i = 0; i < byte.length; i++) {
    byte[i].show()
    num += byte[i].state ? '1' : '0'
  }
}

function mousePressed () {
  for (let b of byte) {
    b.toggle(mouseX, mouseY)
  }
}

function binaryToDecimal (val) {
  let sum = 0
  for (let i = 0; i < val.length; i++) {
    // Starting from the end
    let bit = val.charAt(val.length - i - 1)
    sum += pow(2, i) * parseInt(bit)
  }
  return sum
}
