let tileCount = 10;
let hideGrid = false;

function setup () {
  createCanvas(600, 600);
  smooth();

  print("Click anywhere to start");
  print("Y mouse axis controls shape's ratio and stroke weight");
  print("X mouse axis controls shape's random position");
  print("Space bar or click to re draw");
  print("B to hide/show grid");
}

function draw () {
  background(0);
  translate((width / tileCount) / 2, (height / tileCount) / 2);

  for (let y = 0; y < tileCount; y++) {
    for (let x = 0; x < tileCount; x++) {

      let posX = width / tileCount * x;
      let posY = height / tileCount * y;

      let shiftX = shiftPos(int(mouseX) / tileCount);
      let shiftY = shiftPos(int(mouseX) / tileCount * 2);

      strokeWeight((mouseY + 10) / 60);

      noFill();
      stroke(255, 50);
      circle(posX + shiftX, posY + shiftY, mouseY / 15);

      fill(255);
      noStroke();
      shiftX = shiftPos(20);
      shiftY = shiftPos(40);
      circle(posX + shiftX, posY + shiftY, mouseY / 15 / random(4, 8));

      if (hideGrid && y <= tileCount - 2 && x <= tileCount - 2) {
        noFill();
        stroke(255, 50);
        strokeWeight(0.5);
        rect(posX, posY, width/tileCount, width/tileCount);
      }
    }
  }

  noLoop();
}

function mouseReleased () {
  redraw();
}

function shiftPos (ratio) {
  return random(-mouseX, mouseX) / ratio;
}

function keyReleased () {
  if (key == ' ') {
    redraw();
  }

  if (key == 'b' || key == 'B') {
    hideGrid = !hideGrid;
    redraw();
  }
}
