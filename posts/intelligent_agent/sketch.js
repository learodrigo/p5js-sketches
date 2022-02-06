let angle, posX, posY, posXcross, posYcross;
let showLines = false;

const directions = { north: 0, east: 1, south: 2, west: 3 };

let
angleCount = 50,
lineWeight = 50,
direction = directions.south,
margin = 50,
minLength = 60,
stepSize = 3;


const getRandomAngle = (dir) => {
  const a = (floor(random(-angleCount, angleCount)) + 1) * (90 / angleCount);
  if (dir == directions.north) return a - 90;
  if (dir == directions.east)  return a;
  if (dir == directions.south) return a + 90;
  if (dir == directions.west)  return a + 180;
  return 0;
}

function keyReleased () {
  if (key == ' ') background(0);

  if (key == 's') {
    saveFrame("intelligentAgent-" + frameCount + ".png");
  }
}

const mouseReleased = () => showLines = !showLines;


function setup () {
  createCanvas(1200, 1200);
  background(0);
  smooth();

  angle = getRandomAngle(direction);

  posX = random(width);
  posY = random(height);

  posXcross = random(posX);
  posYcross = random(posY);

  console.log("Press space bar to reset");
  console.log("Click to toggle lines drawing");
}

function draw () {
  for (let i = 0; i <= 20; i++) {
    stroke(255);
    strokeWeight(1);
    point(posX, posY);

    posX += cos(radians(angle)) * stepSize * (random(1) > 0.5 ? 1 : 2);
    posY += sin(radians(angle)) * stepSize;

    let reachedBorder = false;

    if (posY <= margin) {
      direction = directions.south;
      reachedBorder = true;
    } else if (posX >= width - margin) {
      direction = directions.west;
      reachedBorder = true;
    } else if (posY >= height - margin) {
        direction = directions.north;
      reachedBorder = true;
    } else if (posX <= margin) {
      direction = directions.east;
      reachedBorder = true;
    }

    const px = int(posX);
    const py = int(posY);

    if (get(px, py) != color(0) || reachedBorder) {
      const distance = dist(posX, posY, posXcross, posYcross);

      if (distance >= minLength) {
        const sw = distance / lineWeight;

        strokeWeight(sw);
        // strokeWeight(sw * 5);
        stroke(255, 100);

        if (showLines) {
          strokeWeight(1);
          stroke(255, 0, 100);
          line(posX, posY, posXcross, posYcross);
        }

        circle(posX, posY, sw);
        circle(posXcross, posYcross, sw / 2);
      }

      posXcross = posX;
      posYcross = posY;

      angle = getRandomAngle(direction);
    }
  }
}
