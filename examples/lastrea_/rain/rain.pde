int n;
float w, space;
PImage img;
color c1, c2;

void setup () {
  size(1000, 1000);
  noStroke();
  c1 = color(#C950AD);
  c2 = color(#1162F2);
  img = loadImage("heart.jpg");
  img.resize(width, height);
  space = 1.5;
  n = 80;
  w = width / n;

  background(0);
  translate((-w / space), (-w / space));
  for (int j = 0; j < height; j += w) {
    for (int i = 0; i < width; i += w) {
      if (red(img.pixels[int(j * width + 1)]) < 100) {
        fill(255);
      }
      else {
        float r = random(map(j, 0, height, 0, 1), 1);
        if (random(1) > 0.5) {
          float red = red(c1) * r;
          float green = green(c1) * r;
          float blue = blue(c1) * r;
          fill(red(c1) - red, green(c1) - green, blue(c1) - blue);
        }
        else {
          float red = red(c2) * r;
          float green = green(c2) * r;
          float blue = blue(c2) * r;
          fill(red(c2) - red, green(c2) - green, blue(c2) - blue);
        }
      }
      rect(i + w / space, j + w / space, w / space, w / space);
    }
  }

  save("rain-output.jpg");
}
