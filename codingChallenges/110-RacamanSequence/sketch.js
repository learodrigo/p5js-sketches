/*
 * visualize Recamán's Sequence
 *
 * https://mathworld.wolfram.com/RecamansSequence.html
 * http://oeis.org/
 * https://es.wikipedia.org/wiki/Bernardo_Recam%C3%A1n_Santos
 * https://en.wikipedia.org/wiki/Recam%C3%A1n%27s_sequence
 * https://www.youtube.com/watch?v=FGC5TdIiT9U
 * About Sound
 * https://www.youtube.com/watch?v=Bk8rLzzSink
 * https://www.youtube.com/watch?v=wUSva_BnedA
 */

let osc
let attackLevel = 1
let releaseLevel = 0
let attackTime = 0.01
let decayTime = 0.1
let susPercent = 0.5
let releaseTime = 0.5

let biggest = 0
let count = 1
let index = 0
let numbers = []
let sequence = []
let arcs = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(4)

  env = new p5.Envelope()
  env.setADSR(attackTime, decayTime, susPercent, releaseTime)
  env.setRange(attackLevel, releaseLevel)

  osc = new p5.Oscillator()
  osc.setType('sine')
  osc.freq(0)
  osc.amp(env)
  osc.start()

  numbers[index] = true
  sequence.push(index)
}

function step () {
  // Trying to go back
  let next = index - count
  // Checking
  if (next < 0 || numbers[next]) {
    // Going forward
    next = index + count
  }
  // Setting value
  numbers[next] = true
  sequence.push(next)

  // Getting drawing stuff
  let a = new Arc(index, next, count % 2)
  arcs.push(a)

  index = next

  let freq = pow(2, ((index % 88) - 49) / 12) * 440
  osc.freq(freq)
  env.play()

  if (index > biggest) biggest = index

  count++
}

function draw() {
  step()
  translate(0, height / 2)
  scale(width / biggest)
  background(0)

  for (let a of arcs) {
    a.show()
  }
}
