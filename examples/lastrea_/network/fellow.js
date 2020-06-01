class Fellow {
  constructor (c, p, d) {
    this.c = c;
    this.pos = p;
    this.dir = d;
    this.size = 0;
  }

  drawFellow () {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  getPosition () {
    return this.pos;
  }

  moveFellow () {
    let newPos = p5.Vector.add(this.pos, this.dir);

    if (newPos.x - this.size / 2 < 0 || newPos.x + this.size / 2 > width) {
      this.dir.x *= -1;
    }
    if (newPos.y - this.size / 2 < 0 || newPos.y + this.size / 2 > height) {
      this.dir.y *= -1;
    }

    this.pos.add(this.dir);
  }
}
