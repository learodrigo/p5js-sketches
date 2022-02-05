class Shape {
  constructor (x, y, diam, col) {
    this.x = x;
    this.y = y;
    this.diam = diam;
    this.col = col;
  }

  square () {
    fill(this.col);
    rect(this.x, this.y, this.diam, this.diam);
  }

  circle () {
    fill(20, 0, 255, 100);
    ellipse(this.x, this.y, this.diam, this.diam);
  }
}
