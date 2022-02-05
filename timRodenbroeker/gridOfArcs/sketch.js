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

      const wave = sin(radians(frameCount + x * 10 + y * 23));
      const mappedWave = map(wave, 1, -1, 0, 6);
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

  switch (selector) {
    case 0:
      return arc(0, 0, tW, tH, radians(0), radians(90));
    case 1:
      return arc(tileW, 0, tW, tH, radians(90), radians(180));
    case 2:
      return arc(tileW, tileH, tW, tH, radians(180), radians(270));
    case 3:
      return arc(0, tileH, tW, tH, radians(270), radians(360));
    case 4:
      return rect(tileW / 4, tileH / 4, tileW / 2, tileH / 2);
    default:
      return rect(0, 0, tileW, tileH);
  }
}
