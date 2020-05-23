/**
 * implement Omar Pol's fractal toothpick sequence
 *
 * paper - https://oeis.org/A139250
 * generator - https://oeis.org/A139250/a139250.anim.html
 * numerphile - https://www.youtube.com/watch?v=_UtCli1SgjI
 */
const LEN = 63

let minX, maxX

let picks = []

function setup() {
  createCanvas(windowHeight, windowHeight)
  minX = -width / 2
  maxX = width / 2
  picks.push(new Toothpick(0, 0, 1))
}

function draw() {
  background(0)
  translate(width / 2, height / 2)

  let next = []
  let factor = width / (maxX - minX)
  scale(factor)

  for (let t of picks) {
    t.show(factor)

    minX = min(t.ax, minX)
    maxX = max(t.ax, maxX)

    if (t.newPick) {
      let nextA = t.creation(picks, true)
      let nextB = t.creation(picks, false)
      if (nextA !== null) {
        next.push(nextA)
      }
      if (nextB !== null) {
        next.push(nextB)
      }
      t.newPick = false
    }
  }

  picks = picks.concat(next)

  if (frameCount % 150 === 0) {
    result.innerHTML = picks.length + ' toothpicks used in ' + frameCount + ' steps'
    noLoop()
  }
}
