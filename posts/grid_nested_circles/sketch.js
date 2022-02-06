let tileWidth, tileHeight, endSize, endOffset;
let circleCount;

let tileCountX = 10;
let tileCountY = 10;

let actRandomSeed = 0;

const setActRandomSeed = () => actRandomSeed = int(random(100000));
const mousePressed = () => setActRandomSeed();

function setup () {
  createCanvas(600, 600);
  stroke(255, 150);
  strokeWeight(0.1);
  noFill();

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
}

function draw () {
  background(0);
  randomSeed(actRandomSeed);

  if (mouseX > 0) {
    circleCount = mouseX / 30 + 1;
    endSize = map(mouseX, 0, width, tileWidth / 2, 0);
  }

  if (mouseY > 0) {
    endOffset = map(mouseY, 0, height, 0, (tileWidth - endSize) / 2);
  }

  for (let y = 0; y <= tileCountY; y++) {
    for (let x = 0; x <= tileCountX; x++) {
      push();
        translate(tileWidth * x, tileHeight * y);
        scale(1, tileHeight / tileWidth);

        const toggle = int(random(0, 4));

        if (toggle == 0) rotate(-HALF_PI);
        if (toggle == 1) rotate(0);
        if (toggle == 2) rotate(HALF_PI);
        if (toggle == 3) rotate(PI);

        if (circleCount > 0) {
          for (let i = 0; i < circleCount; i++) {
            const diam = map(i, 0, circleCount - 1, tileWidth, endSize);
            const offset = map(i, 0, circleCount - 1, 0, endOffset);

            circle(offset, 0, sqrt(diam));
            circle(offset, 0, diam);
            circle(offset, 0, pow(diam, 3));
          }
        }

      pop();
    }
  }
}
