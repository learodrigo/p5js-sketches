let n, w, space, img, c1, c2;

function preload () {
  img = loadImage('heart.jpg');
}

function setup () {
  createCanvas(600, 600);
  noLoop();
  noStroke();
  c1 = color('#C950AD');
  c2 = color('#1162F2');
  img.resize(width, height);
  space = 1.5;
  n = 80;
  w = width / n;
}

function draw () {
  background(0);
  translate((-w / space), (-w / space));
  for (let j = 0; j < height; j += w) {
    for (let i = 0; i < width; i += w) {
      if (red(img.pixels[int(j * width + 1)]) < 100) {
        fill(255);
      }
      else {
        let r = random(map(j, 0, height, 0, 1), 1);
        if (random(1) > 0.5) {
          let red = red(c1) * r;
          let green = green(c1) * r;
          let blue = blue(c1) * r;
          fill(red(c1) - red, green(c1) - green, blue(c1) - blue);
        }
        else {
          let red = red(c2) * r;
          let green = green(c2) * r;
          let blue = blue(c2) * r;
          fill(red(c2) - red, green(c2) - green, blue(c2) - blue);
        }
      }
      rect(i + w / space, j + w / space, w / space, w / space);
    }
  }
}
