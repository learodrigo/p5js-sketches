let currentCount = 20;
let margin = 100;
let maxCount = 5000;

let x = Array(maxCount);
let y = Array(maxCount);
let r = Array(maxCount);

function setup () {
  createCanvas(600, 600);
  background(0);

  for (let i = 0; i < currentCount; i++) {
    r[i] = random(1, 7);
    x[i] = random(margin, width - margin);
    y[i] = random(margin, height - margin);
  }
}

function draw () {
  //background(0);

  const newR = random(1, 7);
  const newX = random(margin, width - margin);
  const newY = random(margin, height - margin);

  // Longest distance is the diagonal
  let closestD = sqrt(width * width + height * height);
  let closestIn = 0;

  for (let i = 0; i < currentCount; i++) {
    const newD = dist(newX, newY, x[i], y[i]);

    if (newD < closestD) {
      closestD = newD;
      closestIn = i;
    }
  }

  noFill();
  stroke(255);
  strokeWeight(0.5);
  circle(newX, newY, newR * 2);
  line(newX, newY, x[closestIn], y[closestIn]);

  const angle = atan2(newY - y[closestIn], newX - x[closestIn]);
  const i = currentCount;

  x[i] = x[closestIn] + cos(angle) * (r[closestIn] + newR);
  y[i] = y[closestIn] + sin(angle) * (r[closestIn] + newR);
  r[i] = newR;

  fill(255);
  noStroke();
  circle(x[i], y[i], r[i] * 2);

  currentCount++;

  if (currentCount >= maxCount) {
    console.log("Limit reached: " + maxCount);
    noLoop();
  }
}

function keyReleased () {
  if (key == 's') {
    saveFrame("growthStructures-" + frameCount + ".png");
  }
}
