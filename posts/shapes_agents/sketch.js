let centerX, centerY;

let formRes = 15;
let stepSize = 2;
let shapeRadius = 50;

let x = Array(formRes);
let y = Array(formRes);

let filled = false;
let freeze = false;
let noLines = false;


function mousePressed() {
  centerX = mouseX;
  centerY = mouseY;

  const angle = radians(360 / float(formRes));
  const radius = shapeRadius * random(0.5, 2);

  for (let i = 0; i < formRes; i++) {
    x[i] = cos(angle * i) * radius;
    y[i] = sin(angle * i) * radius;
  }
}

function keyReleased() {
  if (key == 'c') background(0);
  if (key == 'f') filled = !filled;
  if (key == 'n') noLines = !noLines;
}

function setup () {
  createCanvas(600, 600);
  smooth();

  background(0);

  console.log('Press C to clear the background')
  console.log('Press F to fill the shape')
  console.log('Press N to remove lines from shape')

  centerX = width / 2;
  centerY = height / 2;

  const angle = radians(360 / float(formRes));

  for (let i = 0; i < formRes; i++) {
    x[i] = cos(angle * i) * shapeRadius;
    y[i] = sin(angle * i) * shapeRadius;
  }
}

function draw () {
  if (mouseX != 0 || mouseY != 0) {
    centerX += (mouseX - centerX) * 0.01;
    centerY += (mouseY - centerY) * 0.01;
  }

  for (let i = 0; i < formRes; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    // circle(x[i] + width / 2, y[i] + height / 2, 20);
  }

  noFill();
  if (filled) fill(random(255));

  stroke(255, 50);
  if (noLines) noStroke();

  beginShape();
    curveVertex(
      x[formRes - 1] + centerX,
      y[formRes - 1] + centerY
    );

    for (let i = 0; i < formRes; i++) {
      curveVertex(
        x[i] + centerX,
        y[i] + centerY
      );
    }

    curveVertex(
      x[0] + centerX,
      y[0] + centerY
    );

    curveVertex(
      x[1] + centerX,
      y[1] + centerY
    );
  endShape();
}
