function preload () {
  img = loadImage('https://images.unsplash.com/photo-1565651454302-e263192bad3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
}

function setup () {
  createCanvas(600, 600);
  let r, g, b;
  let col1 = color(105, 76, 155);
  let col2 = color(229, 112, 48);
  img.resize(width, height);

  loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      let pix = (x + y * width) * 4

      if (red(pixels[pix + 0] - 30 > blue(pixels[pix + 2]))) {
        r = map(red(pixels[pix + 0]), 0, 255, 0,  red(col1));
        g = map(red(pixels[pix + 0]), 0, 255, 0, green(col1));
        b = map(red(pixels[pix + 0]), 0, 255, 0, blue(col1));
      } else {
        r = map(blue(pixels[pix + 2]), 0, 255, 0,   red(col2));
        g = map(blue(pixels[pix + 2]), 0, 255, 0, green(col2));
        b = map(blue(pixels[pix + 2]), 0, 255, 0,  blue(col2));
      }

      pixels[pix + 0] = 12;
      pixels[pix + 1] = 12;
      pixels[pix + 2] = 12;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

  image(img, 0, 0);
}
