const sketch = p => {
  p.x = 0
  p.y = 0

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight / 2)
    p.background(21)
    p.x = p.width / 2
    p.y = p.height / 2
  }

  p.draw = () => {
    p.fill(255, 0, 200, 5)
    p.noStroke()
    p.ellipse(p.x, p.y, 48)

    p.x += p.random(-10, 10)
    p.y += p.random(-10, 10)
  }
}

const myp5 = new p5(sketch)
const myp5_2 = new p5(sketch)

function resetBackgound () {
  myp5.x = myp5.width / 2
  myp5.y = myp5.height / 2
  myp5.background(myp5.random(255))
}

setInterval(resetBackgound, 3000)
