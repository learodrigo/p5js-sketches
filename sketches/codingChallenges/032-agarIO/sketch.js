// https://en.wikipedia.org/wiki/Agar.io
// TODO: https://www.youtube.com/watch?v=ZjVyKXp9hec&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=36

const PLAYER_SIZE = 64
const SMALL_AMOUNT = 50
const SMALL_RADIUS = 10

let blob
let blobs = []
let zoom = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
  blob = new Blob(0, 0, PLAYER_SIZE)

  for (let i = 0; i < SMALL_AMOUNT; i++) {
    let x = random(-width, width)
    let y = random(-height, height)
    blobs.push(new Blob(x, y, SMALL_RADIUS))
  }
}

function draw() {
  background(0)

  // The player on the center
  translate(width / 2, height / 2)
  // Scaling the view while growing (using lerp for animation)
  let newZoom = PLAYER_SIZE / blob.r
  zoom = lerp(zoom, newZoom, 0.1)
  scale(zoom)
  // Moving the background
  translate(-blob.pos.x, -blob.pos.y)


  // Small ones
  for (let i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show()
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1)
    }
  }

  // Player
  blob.update()
  blob.show()
}
