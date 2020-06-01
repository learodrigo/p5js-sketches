let n, noiseMax;

function setup () {
  createCanvas(600, 600);
  stroke(255);
  fill(255);
  n = 80;
  noiseMax = 0;

  background('#0073B1');
  translate(width / 2, height / 3);

  for (let i = 0; i < n; i++) {
    for (let angle = 0; angle < TWO_PI; angle += 0.02) {
      let xoff = map(cos(angle), -1, 1, 0, noiseMax);
      let yoff = map(sin(angle), -1, 1, 0, noiseMax);
      let r = map(noise(xoff + frameCount, yoff + frameCount), 0, 1, 100, 200);
      let x = r * cos(angle);
      let y = r * sin(angle) + i * 2.5;
      point(x, y);
    }
    noiseMax += 0.03;
  }
}
