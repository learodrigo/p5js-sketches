let cols, rows;
let inc = 0.05;
let zoff = 0.0;
let scl = 20;
let debug = false;
let particles = []
let flowFields = [];

function keyPressed () {
  if (key == 'd') debug = !debug;
  if (key == 'b') background(0);
}

function setup() {
  createCanvas(900, 900);
  background(0);

  cols = floor(width / scl);
  rows = floor(height / scl);

  for (let i = 0; i < 10000; i++) {
    particles.push(new Particle());
  }

  flowFields = Array(cols).fill(Array(rows).fill(0));
}

function draw() {
  //background(0, 5);
  let yoff = 0;

  for(let y = 0; y < rows; y++) {
    let xoff = 0;

    for(let x = 0; x < cols; x++) {
      const angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

      const newVector =  p5.Vector.fromAngle(angle);

      newVector.setMag(1);

      flowFields[y][x] = newVector;

      xoff += inc;

      if (debug) {
         stroke(255, 0, 0, 100);
         strokeWeight(1);

         push();
          translate(x * scl, y * scl);
          rotate(newVector.heading());
          line(0, 0, scl, 0);
         pop();
      }
    }

    yoff += inc;
    zoff += 0.004;
  }

  for (const p of particles) p.main(flowFields);
}
