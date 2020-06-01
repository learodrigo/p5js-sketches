let x, y, xp, yp, r, inc, nMax, rMin, rMax, s;

function setup () {
  createCanvas(600, 600);
  stroke(0);
  nMax = 0.4;
  inc = 0;
  xp = 0;
  yp = 0;
}

function draw () {
  background('#083D77');
  translate(width / 2, height / 2);
  rMin = 50;
  rMax = 200;
  s = 0.2;
  fill(0);
  strokeWeight(s);

  for (let j = 0; j < 25; j++) {
    beginShape();
    for (let i = 0; i < TWO_PI; i += 0.01) {
      xp = map(cos(i), -1, 1, 0, nMax);
      yp = map(sin(i), -1, 1, 0, nMax);
      r = map(noise(xp, yp + inc), 0, 1, rMin, rMax);
      x = cos(i) * r;
      y = sin(i) * r;
      vertex(x, y);
    }
    endShape(CLOSE);

    rMin += 30;
    rMax += 30;
    s += 1.2;
    strokeWeight(s);
    noFill();
  }

  inc += 0.01;
}
