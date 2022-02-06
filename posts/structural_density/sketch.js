const margin = 50;
const minRadius = 1;
const maxRadius = 50;
const maxCount = 1000;
let currentCount = 1;

const mouseRect = 20;

const closestIndex = Array(maxCount);
const x = Array(maxCount);
const y = Array(maxCount);
const r = Array(maxCount);

function setup () {
  createCanvas(1200, 1200);
  background(0);
  smooth();
  rectMode(CENTER);

  x[0] = random(maxRadius + margin, width - maxRadius - margin);
  y[0] = random(maxRadius + margin, height - maxRadius - margin);
  r[0] = random(minRadius, maxRadius);

  closestIndex[0] = 0;
}

function draw () {
  let intersect = false;

  let newX = random((maxRadius * 2) + margin, width - (maxRadius * 2) - margin);
  let newY = random((maxRadius * 2) + margin, height - (maxRadius * 2) - margin);
  let newR = minRadius;

  if (mouseIsPressed) {
    newX = random(mouseX - mouseRect / 2 - margin, mouseX + mouseRect / 2 + margin);
    newY = random(mouseY - mouseRect / 2 - margin, mouseY + mouseRect / 2 + margin);
    newR = 1;
  }

  for (let i = 0; i < currentCount; i++) {
    const d = dist(newX, newY, x[i], y[i]);

    if (d < (newR + r[i])) {
      intersect = true;
      break;
    }
  }

  if (!intersect) {
    let newRadius = width;

    for (let i = 0; i < currentCount; i++) {
      const d = dist(newX, newY, x[i], y[i]);

      if (newRadius > d - r[i]) {
        newRadius = d - r[i];
        closestIndex[currentCount] = i;
      }
    }

    if (newRadius > maxRadius) newRadius = maxRadius;

    x[currentCount] = newX;
    y[currentCount] = newY;
    r[currentCount] = newRadius;
    currentCount++;
  }

  for (let i = 0; i < currentCount; i++) {
    noFill();
    stroke(255, 10);
    strokeWeight(2);
    circle(x[i], y[i], r[i] * 2);

    rotate(HALF_PI);
    if (random(1) > 0.7) {
     fill(255, 1);
     stroke(255, 1);
    }
    strokeWeight(0.5);
    rect(x[i], y[i], r[i], r[i]);

    const n = closestIndex[i];
    strokeWeight(6);
    line(x[i], y[i], x[n], y[n]);
  }

  if (currentCount >= maxCount) {
    noLoop();
  }
}

// timestamp
const timestamp = () => {
  const now = Calendar.getInstance();
  return String.format("%1$ty%1$tm%1$td_%1$tH%1$tM%1$tS", now);
}

const keyReleased = () => {
  if (key == 's') {
    const msg = "structuralDensity-" + timestamp() + "-" + frameCount + ".png";
    saveFrame(msg);
    console.log("Saved: " + msg);
  }
}
