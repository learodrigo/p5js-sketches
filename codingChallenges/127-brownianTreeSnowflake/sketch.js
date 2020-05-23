/**
 * create a "Brownian Tree Snowflake"
 *
 * https://codegolf.stackexchange.com/questions/42506/draw-a-snowflake
 * https://www.flickr.com/photos/golanlevin/sets/72157594387404319
 */

let current

let snowflake = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  current = new Particle(height / 2, 0)
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  rotate(PI / 6)

  while (!current.finished() && !current.intersects(snowflake)) {
    current.update()
  }

  snowflake.push(current)
  current = new Particle(height / 2, 0)

  for (let i = 0; i < 6; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
