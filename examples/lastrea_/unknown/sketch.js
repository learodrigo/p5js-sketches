function setup() {
  createCanvas(600, 600);
  background(0);
  strokeWeight(0.5);

  const squares = [];
  const max_ = 200;
  const min_ = 5;
  const n = 250;
  const radius = 15;
  let x, y, overlapping, s;

  for (let i = 0; i < n; i++) {
    overlapping = true;
    while (overlapping) {
      x = random(width - min_);
      y = random(height - min_);
      s = random(min_, min([width - x, height - y, max_]));
      let square = new Square(x, y, s);
      overlapping = false;

      for (const sq of squares) {
        overlapping = (
          sq.x >= square.x + square.size ||
          sq.y >= square.y + square.size ||
          sq.x + sq.size <= square.x ||
          sq.y + sq.size <= square.y
        )
      }

      if (!overlapping) squares.push(square);
    }
  }

  for (const sq of squares) {
    let c = random(20, 255);
    fill(sq.x / width * c, 0, c);
    rect(sq.x, sq.y, sq.size, sq.size, radius);
  }
}
