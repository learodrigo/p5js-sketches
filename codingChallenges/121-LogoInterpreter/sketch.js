/**
 * attempt to make a Logo interpreter and draw "turtle graphics"
 *
 * https://en.wikipedia.org/wiki/Logo_(programming_language)
 * http://cs.brown.edu/courses/bridge/1997/Resources/LogoTutorial.html
 * https://el.media.mit.edu/logo-foundation/
 * Transformations - https://www.youtube.com/watch?v=o9sgjuh-CBM
 * Angles - https://www.youtube.com/watch?v=qMq-zd6hguc
 */

let editor
let turtle

function setup() {
  createCanvas(200, 200)
  angleMode(DEGREES)
  background(0)

  turtle = new Turtle(100, 100, 0)

  editor = select('#code')
  editor.input(goTurtle)
  goTurtle()
}

function execute (cmds) {
  for (let cmd of cmds) {
    let name = cmd.name
    let arg = cmd.arg
    if (name === 'repeat') {
      for (let i = 0; i < arg; i++) {
        execute(cmd.commands)
      }
    } else {
      COMMANDS[name](arg)
    }
  }
}

function goTurtle () {
  push()
  background(0)
  turtle.reset()

  let code = editor.value()
  let parser = new Parser(code)
  let commands = parser.parse()
  execute(commands)

  pop()
}
