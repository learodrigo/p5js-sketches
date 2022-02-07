let angle = 0.0;
let counter = 0.0;

function setup() {
  createCanvas(1200, 600);
  background(0);
  // noLoop();
}

function mousePressed () {
  background(0);
}

function keyPressed() {
  if (key == ' ') {
    background(0);
  }
}

function draw() {
  strokeWeight(0.2 + counter);

  angle = sin(counter) * 100;
  counter += 0.0001;

  stroke(255, 100);

  push();
    // Bottom left
    translate(width * 0.25, height);
    branch(height * 0.4);
  pop();

  push();
    // Bottom center
    translate(width * 0.5, height);
    branch(height * 0.4);
  pop();

  push();
    // Bottom right
    translate(width * 0.75, height);
    branch(height * 0.4);
  pop();

  push();
    // Top left
    translate(width * 0.25, 0);
    rotate(radians(180));
    branch(height * 0.4);
  pop();

  push();
    // Top center
    translate(width * 0.5, 0);
    rotate(radians(180));
    branch(height * 0.4);
  pop();

  push();
    // Top right
    translate(width * 0.75, 0);
    rotate(radians(180));
    branch(height * 0.4);
  pop();

  push();
    // Left top
    translate(0, height * 0.4);
    rotate(radians(90));
    branch(width * 0.25);
  pop();

  push();
    // Left bottom
    translate(0, height * 0.6);
    rotate(radians(90));
    branch(width * 0.25);
  pop();

  push();
      // Right top
    translate(width, height * 0.4);
    rotate(radians(270));
    branch(width * 0.25);
  pop();

  push();
      // Right bottom
    translate(width, height * 0.6);
    rotate(radians(270));
    branch(width * 0.25);
  pop();
}

function branch (len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
      rotate(angle);
      branch(len * 0.55);
    pop();

    push();
      rotate(-angle);
      branch(len * 0.55);
    pop();
  }
}
