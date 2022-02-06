let withHue = false;

let symmetry = 6;
let angle = 360 / symmetry;

let xoff = 0;

function setup () {
  createCanvas(900, 900);
  background(0);

  if (withHue) colorMode(HSB, 255, 255, 255);
}

function draw () {
  translate(width / 2, height / 2);
  stroke(255, 50);

  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  scale(0.75);
  rotate(PI * 0.33);

  if (mouseIsPressed) {
    if (withHue) {
      let hu = noise(xoff) * 255;
      stroke(hu, 255, 255);
      xoff += 0.1;
    }

    for (let i = 0; i < symmetry; i++) {
        let d = dist(mx, my, pmx, pmy);
        let sw = map(d, 0, 5, 1, 5);

        rotate(PI * 0.33);

        strokeWeight(sw);
        line(mx, my, pmx, pmy);

        push();
          scale(-1, 1);
          line(mx, my, pmx, pmy);
        pop();
    }
  }
}

function keyPressed () {
  if (key == 's' || key == 'S') {
    saveFrame("snowflake-####.png");
  }

  else if (key == ' ') {
    background(0);
  }
}
