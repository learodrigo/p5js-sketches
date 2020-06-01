class Network {
  constructor (n, d) {
    this.population = [];
    this.distance = d;

    for (let i = 0; i < n; i++) {
      let pos = createVector(random(width), random(height));
      let dir = p5.Vector.random2D();
      let col = (random(1) < 0.5) ? '#32CAFE' : '#FF4328'
      this.population.push(new Fellow(color(col), pos, dir));
    }
  }

  drawNetwork () {
    for (const fellow of this.population) {
      fellow.drawFellow();
    }
  }

  startNetwork () {
    for (const fellow of this.population) {
      fellow.moveFellow();
    }

    for (let i = 0; i < this.population.length - 1; i++) {
      for (let j = i + 1; j < this.population.length; j++) {
        let fellow = this.population[i];
        let v1 = fellow.getPosition();
        let v2 = this.population[j].getPosition();

        if (v1.dist(v2) < this.distance) {
          strokeWeight(map(v1.dist(v2), 0, this.distance, 3, 0));

          let r =   red(fellow.c);
          let g = green(fellow.c);
          let b =  blue(fellow.c);

          stroke(
            map(v1.dist(v2), 0, this.distance, r, 0),
            map(v1.dist(v2), 0, this.distance, g, 0),
            map(v1.dist(v2), 0, this.distance, b, 0)
          );

          line(v1.x, v1.y, v2.x, v2.y);
        }
      }
    }
  }
}
