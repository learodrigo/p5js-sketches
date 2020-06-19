class Square {
  constructor (x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.radius = floor(random(2, 15));
  }

  show () {
    let c = random(20, 255);
    fill(this.x / width * c, 0, c);
    rect(this.x, this.y, this.size * 0.35, this.size * 0.35, this.radius);
  }
}
