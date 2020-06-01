PImage img;
int cr[];
int cpt;
int b;

void setup () {
  size(600, 600);
  background(0);
  img = loadImage("aurora.jpg");
  img.resize(width, height);
  cr = new int[height];
  b = 80;
}

void draw () {
  for (int i = 0; i < width; i++) {
    cpt = 0;
    for (int j = i; j < img.pixels.length; j += width) {
      cr[cpt] = img.pixels[j];
      cpt++;
    }

    cr = sort_color(cr);
    cpt = 0;
    for (int k = i; k < img.pixels.length; k += width) {
      img.pixels[k] = cr[cpt];
      cpt++;
    }
  }

  updatePixels();
  image(img, 0, 0);
  save("aurora-modified.jpg");
}

int[] sort_color (int cr[]) {
  int tmp = 0;
  for (int i = 0; i < cr.length; i++) {
    for (int j = 1; j < (cr.length - i); j++) {
      if (cr[j-1] > cr[j] && saturation(cr[j]) > b) {
        tmp = cr[j-1];
        cr[j-1] = cr[j];
        cr[j] = tmp;
      }
    }
  }
  return cr;
}
