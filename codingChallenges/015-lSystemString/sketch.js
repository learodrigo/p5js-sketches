// vars: A, B
// axiom: A
// rules: A -> AB, B -> A

const axiom = 'A'
let sentence = axiom

const rules = []
rules[0] = {
  a: 'A',
  b: 'ABC',
}

rules[1] = {
  a: 'B',
  b: 'A',
}

rules[2] = {
  a: 'C',
  b: 'BA',
}

function generate() {
  let nextSentence = ''
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i)
    let found = false
    for (let j = 0; j < rules.length; j++) {
      if (current === rules[j].a) {
        nextSentence += rules[j].b
        found = true
        break
      }
    }

    if (!found) nextSentence += current
  }

  sentence = nextSentence
  createP(sentence)
}

function setup() {
  noCanvas()
  createP(axiom)
  var button = createButton('generate')
  button.mousePressed(generate)
}

function draw() {
  background(255)
}
