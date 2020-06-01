const MIN_WEIGHT = 1;
const MAX_WEIGHT = 8;
const MIN_INC = 20;
const MAX_INC = 30;

function setup () {
  createCanvas(600, 600);
  noLoop();
  stroke(51);
  strokeCap(PROJECT);
  noFill();
}

function draw () {
  let i = MIN_INC;
  while (i < max(width, height) * 1.5) {
    strokeWeight(random(MIN_WEIGHT, MAX_WEIGHT));
    let start = random(TWO_PI);
    arc(width / 2, height / 2, i, i, start, start + random(PI / 4, TWO_PI));
    i += random(MIN_INC, MAX_INC);
  }
}
