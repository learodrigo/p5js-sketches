function setup() {
  createCanvas(600, 600);
  background(0);
  strokeWeight(0.5);

  const squares = [];
  const max_ = 200;
  const min_ = 5;
  const n = 2500;
  let x, y, s, overlapping;

  for (let i = 0; i < n; i++) {
    overlapping = true;

    while (overlapping) {
      x = random(width - min_);
      y = random(height - min_);
      s = random(min_, min(width - x, height - y, max_));
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
    sq.show();
  }
}
