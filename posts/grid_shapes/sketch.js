let radius = 100;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);

  stroke(0);
}

function draw() {
  background(0);

  let count = 0;

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      drawColorSpectrums(++count, x * radius * 3 + radius + radius / 2, y * radius * 3 + radius + radius / 2);
    }
  }


}

function drawColorSpectrums(count, x, y) {
  let angleStep;

  switch (count) {
    case 1:
      strokeWeight(9); angleStep = 120; break;
    case 2:
      strokeWeight(8); angleStep = 90; break;
    case 3:
      strokeWeight(7); angleStep = 72; break;
    case 4:
      strokeWeight(6); angleStep = 60; break;
    case 5:
      strokeWeight(5); angleStep = 45; break;
    case 6:
      strokeWeight(4); angleStep = 30; break;
    case 7:
      strokeWeight(3); angleStep = 15; break;
    case 8:
      strokeWeight(2); angleStep = 12; break;
    case 9:
      strokeWeight(1); angleStep = 6; break;
    default:
      angleStep = 360;
  }

  push()
    translate(x, y);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    for (let angle = 0; angle <= 360; angle += angleStep) {
        const vx = cos(radians(angle)) * radius;
        const vy = sin(radians(angle)) * radius;

      vertex(vx, vy);
      fill(angle + 2, 100, 100);
    }
    endShape();
  pop();
}

function keyReleased() {
  if (key == 's' || key == 'S') {;
    saveFrame(timestamp() + "_##.png");
    exit();
  }
}

// timestamp
function timestamp() {
  const now = Calendar.getInstance();
  return String.format("%1$ty%1$tm%1$td_%1$tH%1$tM%1$tS", now);
}
