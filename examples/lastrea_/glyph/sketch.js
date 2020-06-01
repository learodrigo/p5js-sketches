let n, cols, rows, w, h, boxes;

function setup () {
  createCanvas(600, 600);
  noLoop();
  noFill();
  stroke(0, 0, 255);
  strokeWeight(10);
  n = 5;
  w = (width / n) - 1.5;
  h = (height / n) - 1.5;
  cols = floor(width / w);
  rows = floor(height / h);
  boxes = new Array(width).fill().map((i) => new Array(height).fill(false));
}

function draw () {
  translate(3, 3);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      boxes[x][y] = random(1) > 0.5;
    }
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (boxes[x][y]) {
        if (x === 0 || !boxes[x - 1][y]) {
          line(x*w, y*h, x*w, (y + 1)*h);
        }
        if (x === cols - 1 || !boxes[x + 1][y]) {
          line((x + 1)*w, y*h, (x + 1)*w, (y + 1)*h);
        }
        if (y === 0 || !boxes[x][y - 1]) {
          line(x*w, y*h, (x + 1)*w, y*h);
        }
        if (y === rows - 1 || !boxes[x][y + 1]) {
          line(x*w, (y + 1)*h, (x + 1)*w, (y + 1)*h);
        }
      }
    }
  }
}
