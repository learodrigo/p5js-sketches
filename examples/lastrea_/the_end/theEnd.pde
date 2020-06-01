int n;
float noiseMax;

void setup () {
  size(1000, 1300);
  stroke(255);
  fill(255);
  n = 80;
  noiseMax = 0;

  background(#0073B1);
  translate(width / 2, height / 2.5);

  for (int i = 0; i < n; i++) {
    for (float angle = 0; angle < TWO_PI; angle += 0.02) {
      float xoff = map(cos(angle), -1, 1, 0, noiseMax);
      float yoff = map(sin(angle), -1, 1, 0, noiseMax);
      float r = map(noise(xoff + frameCount, yoff + frameCount), 0, 1, 200, 400);
      float x = r * cos(angle);
      float y = r * sin(angle) + i * 2.5;
      point(x, y);
    }
    noiseMax += 0.03;
  }
}
