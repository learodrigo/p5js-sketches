class Particle {
  constructor () {
    this.pos = new p5.Vector(random(width), random(height));
    this.vel = new p5.Vector(0, 0);
    this.acc = new p5.Vector(0, 0);
    this.maxSpeed = 2;
    this.prevPos = this.pos.copy();
  }

  update () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  updatePrev () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges () {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
    this.updatePrev();
  }

  applyForce (force) {
    this.acc.add(force);
  }

   lookup(pos, vectors) {
    const column = int(constrain(pos.x / scl, 0, cols - 1));
    const row = int(constrain(pos.y / scl, 0, rows - 1));
    return vectors[column][row].copy();
  }

  follow(flowField) {
    let x = int(constrain(this.pos.x / scl, 0, cols - 1));
    let y = int(constrain(this.pos.y / scl, 0, rows - 1));
    const force = flowField[x][y].copy();

    this.applyForce(force);
  }

  show () {
    stroke(255, 20);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  main(flowFields) {
    this.follow(flowFields);
    this.update();
    this.edges();
    this.show();
  }
}
