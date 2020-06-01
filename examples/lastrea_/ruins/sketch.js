let n, rows, cols, size, xoff, yoff,
ruins, redVal, sum, avg, red, purple,
blue, colors;

function setup () {
  createCanvas(600, 600);
  background(0);
  strokeCap(PROJECT);
  strokeWeight(7);

  n      = 20;
  rows   = height / n;
  cols   = width / n;
  size   = rows * cols;
  sum    = 0;
  xoff   = 0.09;
  yoff   = 0.09;
  ruins  = 0.08;
  redVal = 0.2;

  teaGreen = '#C7F9CC';
  cGreen   = '#57CC99';
  blue     = '#22577A';
  colors   = [teaGreen, cGreen, blue];
  // red = '#E02040';
  // blue = '#275FE0';
  // purple = '#C00080';
  // colors   = [red, blue, purple];

  for (let i = 0; i < size; i++) {
    sum += noise(xoff * (i % cols), yoff * (i / cols));
  }

  avg = sum / size;

  for (let i = 0; i < size; i++) {
    let exp = noise(xoff * (i % cols), yoff * (i / cols));

    if (exp >= avg - ruins) {
      if (random(1) > 0.4) {
        stroke(exp > avg + redVal * 0.5 ? cGreen : blue);
      } else {
        stroke(teaGreen);
      }
      drawLines(i)
    }
  }
}

function drawLines (index) {
  if (random(1) < 0.5) {
    line(n * (index % cols) + 0, n * (index/cols), n * (index % cols) + n, n * (index / cols) + n);
  } else {
    line(n * (index % cols) + n, n * (index/cols), n * (index % cols) + 0, n * (index / cols) + n);
  }
}
