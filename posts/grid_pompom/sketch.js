const numTiles = 5;
const stars = []

function setup () {
  createCanvas(600, 600);

  background(0);
  noFill();
  frameRate(15);

  const tileSize = width / numTiles;
  const length = sqrt((tileSize * tileSize) + (tileSize * tileSize));

  for (let x = 0; x < numTiles; x++) {
    for (let y = 0; y < numTiles; y++) {
      stars.push(new Star(tileSize * x, tileSize * y, length * 0.4));
    }
  }
}

let reprint = false;

function draw() {
  // new Star(mouseX, mouseY, 120).draw()

  for (const star of stars) {
    star.draw();
  }
}

function keyPressed() {
  if (key == 'c') background(0);
  if (key == 'r') redraw();
}


class Star {
  constructor (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    const margin = width / numTiles / 2;

    push();
    translate(this.x + margin + random(5), this.y + margin +  random(5));

    for (let i = 0; i < this.radius; i++){
      push();
        rotate(radians(i * random(70)));
        stroke(255);

        if (random(1) < 0.3) {
          strokeWeight(3);
        } else if (random(1) < 0.6) {
          strokeWeight(random(0.3, 1.1));
        } else if (random(1) > 0.6) {
          strokeWeight(2);
        }

        line(0, 0, i / 2, i / 2);
      pop();
    }
    pop();
  }
}
