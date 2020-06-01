function setup() {
  createCanvas(600, 600, WEBGL);
  background(0);
  stroke(0);
  rectMode(CORNER);
  ambientLight(255);

  const s = width / 100;
  const h = height / 2;
  const n = int(width / s);
  let noiseX, noiseY;

  noiseY = 0;

  for (let i = 0; i < n; i++) {
    noiseX = 0;
    for (let j = 0; j < n; j++) {
      push();
      translate(i * s - width / 2, j * s - height / 2, s);
      fill(0, 0, noise(noiseX, noiseY) * 255);
      box(s, s, noise(noiseX, noiseY) * -h);
      pop();
      noiseX += 0.1;
    }
    noiseY += 0.1;
  }
}
