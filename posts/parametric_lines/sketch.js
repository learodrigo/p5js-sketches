const NUM_LINES = 10;

let t = 0;

const x1 = (t) => sin(t / 10) * 100 + sin(t / 5) * 20;
const y1 = (t) => cos(t / 10) * 100;
const x2 = (t) => sin(t / 10) * 100 + sin(t) * 2;
const y2 = (t) => cos(t / 20) * 100 + cos(t / 12) * 20;

function setup () {
  background(0);
  createCanvas(600, 600);
}

function draw () {
  background(20);

  stroke(255);
  strokeWeight(3);

  translate(width / 2, height / 2);

  for (let i = 0; i < NUM_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }


  t += 0.5;
}
