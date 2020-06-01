function setup() {
  createCanvas(600, 600);
  background(0);
  strokeWeight(0.5);

  const x = width / 2;
  const y = height / 2;
  const radius = width / 2.5;
  const n = width;

  let x1, y1, x2, y2, a, c;

  for (let i = 0; i < n; i++) {
    a = random(TWO_PI);
    x1 = x + cos(a) * radius;
    y1 = y + sin(a) * radius;
    a = random(TWO_PI);
    x2 = x + cos(a) * radius;
    y2 = y + sin(a) * radius;
    c = i / n * 255;
    stroke(0, c, c);
    line(x1, y1, x2, y2);
  }
}
