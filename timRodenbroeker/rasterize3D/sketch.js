let img, tiles, tileSize, exceed, canvasCenter, showBg;

function setup () {
  createCanvas(1080, 1080, WEBGL);
  noStroke();
  frameRate(13);

  img = loadImage('venus-crop.png');
  showBg = false;
}

function draw () {
  tiles = 250;

  // tiles = map(mouseX, 20, width - 20, 100, 500);

  tileSize = height / tiles;
  exceed = int(tiles * 0.337);
  canvasCenter = width / 2;

  background(255);

  translate(150, 0);
  scale(0.7);

  rotateY(radians(frameCount));
  rotateX(radians(frameCount / 30));
  rotateZ(radians(frameCount / 90));
  drawsImage();
}

function drawsImage() {
  push();
    for (let x = 0; x < tiles - exceed; x++) {
      for (let y = 0; y < tiles; y++) {
        const tileX = x * tileSize;
        const tileY = y * tileSize;

        // Gets image point
        const imageCopy = img.get(int(tileX), int(tileY));
        // Maps color to 1 or 0
        const imageBrightness = map(brightness(imageCopy), 255, 0, 0, 1);
        // Sets depth
        const depth = imageBrightness < 0.7
          ? random(0.3, 0.5)
          : map(imageBrightness, 0, 1, 0, 100);

        if (showBg) {
          if (imageBrightness < 0.7) {
            if (random() > 0.3 || random() < 0.7) continue;
          }
        } else {
          if (imageBrightness < 0.7) continue
        }

        const tileZ = (tan(depth) * depth ) / 100;

        fill(255, 10, 10);

        push();
          translate(tileX - canvasCenter, tileY - canvasCenter, tileZ * 30);

          const sphereSize = tileSize * imageBrightness * 0.6;
          sphere(sphereSize);
        pop();
      }
    }
  pop();
}

function keyPressed () {
  if (key == ' ') showBg = !showBg;
  if (key == 'l') noLoop()
}
