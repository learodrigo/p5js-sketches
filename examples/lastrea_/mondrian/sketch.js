const colors = [
  'red',
  'blue',
  'black',
  'yellow'
];
const minSpace = 10;
const maxSpace = 165;
const shift = 1.5;
const x = [];
const y = [];

function setup () {
  createCanvas(600, 600);
  noLoop();
  stroke(0);
  strokeWeight(8);
}

function draw () {
  background(255);
  let step = 0;
  x.push(shift);
  y.push(shift);

  while (step < width - minSpace) {
    step += random(minSpace, maxSpace);
    if (step < width - minSpace) {
      x.push(step);
    }
  }

  step = 0;
  while (step < height - minSpace) {
    step += random(minSpace, maxSpace);
    if (step < height - minSpace) {
      y.push(step);
    }
  }

  x.push(width - shift);
  y.push(height - shift);

  for (let i = 0; i < x.length; i++) {
    line(x[i], 0, x[i], width);
  }

  for (let i = 0; i < y.length; i++) {
    line(0, y[i], height, y[i]);
  }

  for (let i = 0; i < colors.length; i++) {
    let x1 = floor(random(x.length - 1));
    let y1 = floor(random(y.length - 1));
    let x2 = floor(random(x1 + 1, x.length - 1));
    let y2 = floor(random(y1 + 1, y.length - 1));
    fill(colors[i]);
    rect(x[x1], y[y1], x[x2] - x[x1], y[y2] - y[y1]);
  }
}
