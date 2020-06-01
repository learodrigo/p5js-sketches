const MAX_RECURSION = 4;
const NUM = 10;
let heightRect, widthRect;
let palette = ['#3CABDB', '#167FFC', '#595BD4', '#FD3259'];

function setup () {
  createCanvas(600, 600);
  noLoop();
  strokeWeight(1);
  stroke(255);
  heightRect = height / NUM;
  widthRect  = width / NUM;
}

function draw () {
  background('#1E1E1E');

  for (let i = 0; i < NUM; i++) {
    for (let j = 0; j < NUM; j++) {
      if (random(1) > 0.2) {
        drawFractal(i * widthRect, j * heightRect, 1);
      } else {
        if (random(1) > 0.2) {
          fill(palette[floor(random(palette.length))]);
          rect(i * widthRect, j * heightRect, widthRect, heightRect);
        }
      }
    }
  }
}

function drawFractal (x, y, level) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let newX = x + i * widthRect / pow(2, level);
      let newY = y + j * heightRect / pow(2, level);
      if (random(1) > 0.4 && level < MAX_RECURSION) {
        drawFractal(newX, newY, level + 1);
      } else {
        if (random(1) > 0.3) {
          fill(palette[floor(random(palette.length))]);
          rect(newX, newY, widthRect / pow(2, level), heightRect / pow(2, level));
        }
      }
    }
  }
}
