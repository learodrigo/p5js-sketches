let stepSize, diam;
let das = [];

function setup () {
  createCanvas(600, 600);
  background(0, 40);

  const pos = new p5.Vector(width / 2, height / 2);

  stepSize = 3;
  diam = 5;

  for (let i = 0; i < 5; i++) {
    const _stepSize =  int(random(stepSize));
    const _diam = int(random(diam));
    const _opacity = random(25, 150);
    const _da = new DumbAgent(pos, _stepSize, _diam, _opacity)

    das.push(_da);
  }
}

function draw () {
  for (const da of das) {
    da.show();
  }
}
