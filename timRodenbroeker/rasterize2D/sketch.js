let img;

function setup () {
  createCanvas(1250, 1250);
  noiseSeed(10);

  img = loadImage('venus.jpg');
  img.resize(1250, 1250);

  fill(0);
  noStroke();
}

function draw () {
  background(255);

  const tiles = int(map(mouseX, 20, width - 20, 10, 150));
  const tileSize = width / tiles;

  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      const col = img.get(int(x * tileSize), int(y * tileSize));
      const diam = map(brightness(col), 0, 255, tileSize, tileSize * 2);

      new Shape(x * tileSize, y * tileSize, diam / 2).circle()
      new Shape(x * tileSize, y * tileSize, diam, col).square();
    }
  }

}

function mouseClicked() {
}
