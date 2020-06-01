let n, x1, y1, x2, y2, size;

function setup () {
  createCanvas(600, 600);
  noStroke();
  n = 8;
  size = width / n;
}

function draw () {
  background(0);
  frameRate(2);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        random(1) > 0.5 ||
        i === 0 && j === 0 ||
        i === n - 1 && j === 0 ||
        i === 0 && j === n - 1 ||
        i === n - 1 && j === n - 1
      ) {
        fill(255);
        rect(i * size, j * size, size, size,);
      }
    }
  }

  fill(255, 0, 0);
  x1 = int(int(random(1, n - 1)) * size);
  y1 = int(int(random(1, n - 1)) * size);
  rect(x1, y1, size, size);

  do {
    x2 = int(int(random(1, n - 1)) * size);
    y2 = int(int(random(1, n - 1)) * size);
  } while (
    x1 === x2 && y1 === y2 ||
    abs(x1 - x2) === size && abs(y1 - y2) === 0 ||
    abs(x1 - x2) === 0 && abs(y1 - y2) === size ||
    abs(x1 - x2) === size && abs(y1 - y2) === size
  );

  fill(0, 0, 255);
  rect(x2, y2, size, size);
}
