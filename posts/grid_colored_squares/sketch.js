let r = false;

function setup () {
  createCanvas(900, 900);
  noCursor();
  background(0);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  frameRate(10);
}

function draw () {
  background(0);
  drawRects();

  if (r) {
    rec();
    if (frameCount == 360) {
      exit();
    }
  }
}

function drawRects () {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      drawRect(x * 90 + 90, y * 90 + 90);
    }
  }
}

function drawRect (x, y) {
  fill(random(360), 100, 100);
  rect(x, y, 90, 90);

  let rdn = random(60, 80);
  fill(360 - random(360) / 2, 100, 100);
  rect(x, y, rdn, rdn);

  fill(360 - random(360) / 2, 100, 100);
  rect(x, y, rdn / 1.5, rdn / 1.5);

  fill(360 - random(360) / 2, 100, 100);
  rect(x, y, rdn / 2.5, rdn / 2.5);
}
