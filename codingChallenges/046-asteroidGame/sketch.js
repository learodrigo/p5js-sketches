/*
 * Asteroid Game
 * trigonometry - https://www.youtube.com/watch?v=znOBmOrtz_M
 * https://en.wikipedia.org/wiki/Asteroids_(video_game)
 * add ai - https://www.youtube.com/watch?v=h2qVYpK6TPE
 */

const ASTEROIDS = 20

let ship
let lasers = []
let asteroids = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  ship = new Ship()

  for (let i = 0; i < ASTEROIDS; i++) {
    asteroids.push(new Asteroid())
  }
}

function draw() {
  background(0)

  // Asteroid rendering
  for (let i = 0; i < asteroids.length; i++) {
    // Check collision ship - asteroid
    ship.fill = ship.hits(asteroids[i]) ? color(255, 0, 0) : 0
    // Render and moving
    asteroids[i].main()
  }

  // Laser rendering
  // in both for loops we go backward as we add new stuff
  // and remove them if there's a collision
  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].main()

    // We need to remove lasers off the screen
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1)
    } else {

      // Checking collision
      for (let j = asteroids.length - 1; j >= 0 ; j--) {
        if (lasers[i].hits(asteroids[j])) {
          // Threashold to splice or splip
          if (asteroids[j].r > 10) {
            // breakup returns an arary with 2 objects
            let newAsteroids = asteroids[j].breakup()
            // We concatenate the new ones
            asteroids = asteroids.concat(newAsteroids)
          }
          // We remove the collipsion one
          asteroids.splice(j, 1)
          // And we remove the laser
          lasers.splice(i, 1)
          break
        }
      }
    }
  }

  // Ship after to make it be on top
  ship.main()
}

// Listeners
function keyReleased () {
  ship.setRotation(0)
  ship.boosting(false)
}

function keyPressed () {
  switch (keyCode) {
    case RIGHT_ARROW:
      ship.setRotation(0.1)
      break
    case LEFT_ARROW:
      ship.setRotation(-0.1)
      break
    case UP_ARROW:
      ship.boosting(true)
      break
    case DOWN_ARROW:
      ship.setRotation(-0.1)
      break
    case 32:
      // We need the current position and the angle for shooting
      lasers.push(new Laser(ship.pos, ship.heading))
      break
  }
}
