const angleSpeed = 3;
const col = 255;

let angle = 0;
let lineLength;
let showGrid;

function mousePressed () {
  lineLength = random(70, 200);
}

function setup () {
  createCanvas(1200, 1200);
  background(0);

  lineLength = random(70, 200);
}

function draw () {
  if (mouseIsPressed) {
    push();
      strokeWeight(1);
      noFill();
      stroke(col, 50);
      translate(mouseX, mouseY);
      rotate(radians(angle));
      line(0, 0, lineLength, 0);
    pop();

    angle += angleSpeed;
  }

  grid();
}

function grid () {
  const forth = height / 4;

  stroke(255);

  point(forth * 1, forth);
  point(forth * 2, forth);
  point(forth * 3, forth);

  point(forth * 1, forth * 2);
  point(forth * 2, forth * 2);
  point(forth * 3, forth * 2);

  point(forth * 1, forth * 3);
  point(forth * 2, forth * 3);
  point(forth * 3, forth * 3);

  if (showGrid) {
    stroke(255, 0, 0);

    line(0, forth, width, forth);
    line(0, forth * 2, width, forth * 2);
    line(0, forth * 3, width, forth * 3);

    line(forth, 0, forth, height);
    line(forth * 2, 0, forth * 2, height);
    line(forth * 3, 0, forth * 3, height);
  }
}
