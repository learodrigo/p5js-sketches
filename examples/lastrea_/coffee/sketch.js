function setup() {
  createCanvas(600, 600);
  background(255, 0, 0);
  strokeWeight(0.5);

  let xoff, yoff, y1, y2;

  xoff = 0.003;
  yoff = 0.001;

  for (let i = 0; i <= 300; i++) {
    stroke(255 - i, 0, 0);
    for (let j = 0; j < width - 1; j++) {
      y1 = map(noise((j + i) * xoff, yoff), -1, 1, 0, height);
      y2 = y1 //map(noise((j + i) * xoff, yoff), -1, 1, 0, height);
      line(j, y1, j + 1, y2);
    }
    yoff += 0.01;
  }
}
