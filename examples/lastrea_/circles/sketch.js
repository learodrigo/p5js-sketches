function setup() {
  createCanvas(600, 600);
  background('#e73a4e');
  fill(255, 0);

  const size = height / 5;
  const n = 42;
  const shift = size * 0.07;
  const w = size * 0.001;
  const s = size * 0.03;

  for (let i = 0; i < n; i++) {
    push();
    strokeWeight(1 + i * w);
    ellipse(width / 3 - i * shift, height / 2, size + i * s, size + i * s);
    pop();
  }
}
