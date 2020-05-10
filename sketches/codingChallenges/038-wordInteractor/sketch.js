// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://en.wikipedia.org/wiki/Regular_expression
// http://shop.oreilly.com/product/9780596528126.do

let output
let submit
let textField

function setup() {
  noCanvas()
  output = select('#output')
  textField = select('#textField')
  submit = select('#submit')
  submit.mousePressed(newText)
}

function highlight () {
  // Changing color
  let c = color(random(255), 0, random(255))
  this.style('background', c)
}

function newText () {
  let s = textField.value()
  // (\w any 0-9 or a-z, \W !\w, and +) capturing parenthesis
  let words = s.split(/(\W+)/)

  // Make each word an independent element
  for (let i = 0; i < words.length; i++) {
    let span = createSpan(words[i])
    // parent is a p5js DOM function
    span.parent(output)

    if (!/\W+/.test(words[i])) {
      // Listener
      span.mouseOver(highlight)
    }
  }

}
