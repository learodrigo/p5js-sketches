/**
 * Clock in the HTML5 canvas with the p5.js library. This challenge was inspired by John Maeda's "12 o'clocks" and Golan Levin's assignment on the subject in his 60212 Interactivity & Computation class
 *
 * http://cmuems.com/2016/60212/lectures/lecture-09-09b-clocks/maedas-clocks/
 * http://cmuems.com/2016/60212/lectures/lecture-09-09b-clocks/
 * http://cmuems.com/2016/60212/deliverables/deliverables-02/
 * https://github.com/ITPNYU/ICM-2017
 * examples - https://codepen.io/collection/DqRNLQ/?cursor=ZD0xJm89MCZwPTEmdj0xMzc0NjI0
 */

function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw() {
  background(0)

  let _hour = hour()
  let _minute = minute()
  let _second = second()

  noFill()
  strokeWeight(8)
  translate(200, 200)
  rotate(-90)

  stroke(255, 100, 150)
  let _seconds = map(_second, 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, _seconds)
  push()
  strokeWeight(5)
  rotate(_seconds)
  line(0, 0, 75, 0)
  pop()

  stroke(255, 200, 150)
  let _minutes = map(_minute, 0, 60, 0, 360)
  arc(0, 0, 270, 270, 0, _minutes)
  push()
  strokeWeight(6)
  rotate(_minutes)
  line(0, 0, 100, 0)
  pop()

  stroke(150, 100, 150)
  let _hours = map(_hour % 12, 0, 12, 0, 360)
  arc(0, 0, 240, 240, 0, _hours)
  push()
  strokeWeight(4)
  rotate(_hours)
  line(0, 0, 50, 0)
  pop()
}
