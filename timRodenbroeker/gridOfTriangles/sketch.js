const bg = '#111';
const fg = '#00f';

const tileX = 4;
const tileY = tileX;

function setup () {
  createCanvas(600, 600);
}

function draw () {
  background(bg);
  fill(fg);
  noStroke();

  const tileW = width / tileX;
  const tileH = height / tileY;

  for (let x = 0; x < tileX; x++) {
    for (let y = 0; y < tileY; y++) {
      const posX = tileW * x;
      const posY = tileH * y;

      const wave = sin(radians(frameCount + x * 10 + y * 5));
      const mappedWave = map(wave, 1, -1, 0, 5);
      const selector = int(mappedWave);

      push();
        translate(posX, posY);
        drawTile(selector, tileW, tileH);
      pop();
    }
  }
}

function drawTile(selector, tileW, tileH) {
  const tH = tileH * 2;
  const tW = tileW * 2;

  // equilareral
  // return triangle(tW / 2, 0, tH, tW, 0, tH);
  // equilareral inverted
  // return triangle(0, 0, tW / 2, tH, tW, 0);

  switch (selector) {
    case 0:
      triangle(0, 0, tW, tH, tW, 0); break;
    case 1:
      triangle(tW, 0, tW, tH, 0, tH); break;
    case 2:
      triangle(0, 0, 0, tH, tW, tH); break;
    case 3:
      triangle(0, tH, tW, 0, 0, 0); break;
    default:
      return rect(tileW / 4, tileH / 4, tileW / 2, tileH / 2); break;
  }
}
