/**
 * Animated circle packing
 *
 * https://en.wikipedia.org/wiki/Circle_packing
 * http://julienleonard.com/tutorials.html
 * https://duckduckgo.com/?q=circle+packaging+marius&t=canonical&iax=images&ia=images
 */

const CIRCLE_NUM = 2000
let circles = []
let finished = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(51)

  finished++
  if (finished > CIRCLE_NUM) {
    noLoop()
    print('1000 printed, done')
  }

  // Adding more circles
  let newC = newCircle()
  if (newC !== null) {
    circles.push(newC)
  }

  // Displaying circles
  for (let c of circles) {
    if (c.growing) {
      if (c.edges()) {
        c.growing = false
      } else {
        // Then checking all the other circles to see if they touch each other or not
        for (let other of circles) {
          if (c != other) {
            let d = dist(c.x, c.y, other.x, other.y)
            if (d - 1 < c.r + other.r) {
              c.growing = false
              break
            }
          }
        }
      }
    }
    c.show()
    c.grow()
  }
}

// We add circle where there are no circles
function newCircle() {
  // Picking random numbers
  let x = random(width)
  let y = random(height)

  let valid = true

  // Then check if those points are outside a circle
  for (let c of circles) {
    // If the distance between the center if bigger than the radius, break
    let d = dist(x, y, c.x, c.y)
    if (d < c.r) {
      valid = false
      break
    }
  }

  if (valid) {
    return new Circle(x, y)
  } else {
    return null
  }
}
