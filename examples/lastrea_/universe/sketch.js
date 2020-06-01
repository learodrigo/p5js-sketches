function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  const shift = 0.005;
  const gradient = 0.004;
  const space = 0.02;
  const size = space / 2;

  translate(width * shift, height * shift);
  for (let i = 0; i < width; i += width * space) {
    for (let j = 0; j < height; j += height * space) {
      if (random(1) > 0.5) {
        fill(0, 0, 255 - random(j / (height * gradient), 255));
      } else {
        fill(255 - random(j / (height * gradient), 255), 0, 0,);
      }
      rect(i, j, width * size, height * size);
    }
  }
}
