/**
 * Animated circle packing
 *
 * https://en.wikipedia.org/wiki/Circle_packing
 * http://julienleonard.com/tutorials.html
 * https://duckduckgo.com/?q=circle+packaging+marius&t=canonical&iax=images&ia=images
 */

let img

let circles = []
let finished = 0

function preload () {
  img = loadImage('image.jpg')
}

function setup() {
  createCanvas(320, 320)
  let density = displayDensity()
  pixelDensity(1)
  img.loadPixels()
}

function draw() {
  background(255)

  finished++
  if (finished > 10000) {
    noLoop()
    print('10000 printed, done')
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
          if (c !== other) {
            let d = dist(c.x, c.y, other.x, other.y)
            if (d < c.r + other.r || c.r > 50) {
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
  const x = floor(random(width))
  const y = floor(random(height))

  let valid = true

  // Then check if those points are outside a circle
  for (const c of circles) {
    // If the distance between the center if bigger than the radius, break
    const d = dist(x, y, c.x, c.y)
    if (d < c.r || c.r > 50) {
      valid = false
      break
    }
  }

  if (valid) {
    const index = (int(x) + int(y) * img.width) * 4
    const r = img.pixels[index + 0]
    const g = img.pixels[index + 1]
    const b = img.pixels[index + 2]
    const a = img.pixels[index + 3]
    const c = color(r, g, b, a)
    return new Circle(x, y, c)
  } else {
    return null
  }
}
