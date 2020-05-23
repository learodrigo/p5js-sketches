/**
 * simulate the "Bouncing DVD Logo" (aka "DVD Screensaver")
 *
 * https://knowyourmeme.com/memes/bouncing-dvd-logo
 * http://prgreen.github.io/blog/2013/09/30/the-bouncing-dvd-logo-explained/
 */

let dvd, x, y
let xspeed, yspeed
let r, g, b

let bounce = 0
let hit = 0

function tintImg () {
  r = random(255)
  g = random(255)
  b = random(255)
  tint(r, g, b)
}

function preload () {
  dvd = loadImage('dvd_logo.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = random(dvd.width, width - dvd.width)
  y = random(dvd.height, height - dvd.height)
  xspeed = 10
  yspeed = 10
}

function draw() {
  background(0)
  image(dvd, x, y)

  x += xspeed
  y += yspeed

  if (x + dvd.width >= width || x <= 0) {
    xspeed *= -1
    tintImg()
    bounce++
  }
  if (y + dvd.height >= height || y <= 0) {
    yspeed *= -1
    tintImg()
    bounce++
  }

  let hitX = (x + dvd.width === width || x === 0)
  let hitY = (y + dvd.height === height || y === 0)
  if (hitX && hitY) {
    hits++
    print(hits * 100 / bounce + '% probability to hit a corner')
  }
}
