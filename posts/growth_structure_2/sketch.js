let hexx;

let currentCount = 5;
const margin = 100;
const maxCount = currentCount * 200;

const x = Array(maxCount);
const y = Array(maxCount);
const r = Array(maxCount);

const randomR = () => random(1, 7);
const randomX = () => random(margin, width - margin);
const randomY = () => random(margin, height - margin);

function setup () {
  createCanvas(600, 600);
  background(0);

  for (let i = 0; i < currentCount; i++) {
    r[i] = randomR();
    x[i] = randomX();
    y[i] = randomY();
  }
}

function polygon(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;

  beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      const sx = x + cos(a) * radius;
      const sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
  endShape(CLOSE);
}

function draw () {
  const newR = randomR();
  const newX = randomX();
  const newY = randomY();

  // Longest distance is the diagonal
  let closestD = sqrt(width * width + height * height);
  let closestIn = 0;

  for (let i = 0; i < currentCount; i++) {
    const newD = dist(newX, newY, x[i] - 1, y[i] - 1);

    if (newD < closestD) {
      closestD = newD;
      closestIn = i;
    }
  }

  const angle = atan2(newY - y[closestIn], newX - x[closestIn]);
  const i = currentCount;
  currentCount++;

  x[i] = x[closestIn] + cos(angle) * (r[closestIn] + newR);
  y[i] = y[closestIn] + sin(angle) * (r[closestIn] + newR);
  r[i] = newR;

  showHistoryPath(newX, newY, newR, closestIn);

  stroke(255, 150);
  strokeWeight(r[i] / 2);
  fill(255);
  noStroke();

  noFill();
  stroke(255, 100);
  strokeWeight(2);

  circle(x[i], y[i], r[i] * 4);
  circle(x[i], y[i], r[i] * 3);
  circle(x[i], y[i], r[i] * 2);
  circle(x[i], y[i], r[i] * 1);

  stroke(255, 100);
  polygon(x[i], y[i], r[i] * 5, int(random(5, 7)));

  stroke(255, 50);
  polygon(x[i], y[i], r[i] * 7, int(random(6, 8)));

  stroke(255, 40);
  polygon(x[i], y[i], r[i] * 9, int(random(7, 9)));

  if (currentCount >= maxCount) {
    console.log("Limit reached: " + maxCount);
    noLoop();
  }
}

const showHistoryPath = (_x, _y, _r, inx) => {
  noFill();
  stroke(255);
  strokeWeight(0.1);
  circle(_x, _y, _r * 2);
  line(_x, _y, x[inx], y[inx]);
}

const timestamp = () => {
  const now = Calendar.getInstance();
  return String.format("%1$ty%1$tm%1$td_%1$tH%1$tM%1$tS", now);
}

const keyReleased = () => {
  if (key == 's') {
    const msg = "growthStructures-" + timestamp() + "-" + frameCount + ".png";
    saveFrame(msg);
    console.log("Saved: " + msg);
  }
}
