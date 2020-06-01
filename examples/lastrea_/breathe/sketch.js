let pos, planet, bubble, halo, edge, inhale, stop, exhale, repeat, time, c, bubbleSize, planetSize, bubbleGrowth, haloSize, haloGrowth, haloColor;

const cnv = 600;

function setup () {
  createCanvas(cnv, cnv);
  planet = createVector(width / 2, height / 2);
  pos    = createVector(width / 2, height * 0.8);
  bubble = 100;
  c      = 125;
  edge   = 0.3;
  halo   = 125;

  time   = frameCount % 1140;
  inhale = time;
  stop   = inhale + 60 * 4;
  exhale = stop   + 60 * 7;
  repeat = exhale + 60 * 8;

  bubbleGrowth = height * 0.08;
  bubbleSize   = height * 0.15;
  haloGrowth   = height * 0.070;
  haloSize     = height * 0.175;
  planetSize   = height * 0.020;
  haloColor    = 0;
}

function draw () {
  background('#EAE8E7');
  time = frameCount % 1140;
  planet.x = pos.x + halo / 1.5 * cos(map(time, 0, 1140, 5*PI/2, PI/2));
  planet.y = pos.y + halo / 1.5 * sin(map(time, 0, 1140, 7*PI/2, 3*PI/2));

  stroke(c);
  strokeWeight(2.2);
  noFill();
  ellipse(pos.x, pos.y, halo);

  noStroke();
  fill('#62BFED');
  ellipse(pos.x, pos.y, bubble);

  fill('#4EFFEF');
  ellipse(planet.x, planet.y, planetSize);

  if (time < stop) {
    if (time <= inhale + 60) {
      c = haloColor + (255 - haloColor) * sin(map(time, inhale, inhale+60, PI/2, PI*2));
    }
    pos.y  = height / 2 + height * edge * sin(map(time, inhale, stop, PI/2, 3*PI/2));
    bubble = bubbleSize + bubbleGrowth * sin(map(time, inhale, stop, 3*PI/2, PI/2));
    halo   = haloSize + haloGrowth * sin(map(time, inhale, stop, 3*PI/2, PI/2));
  }
  else {
    if (time >= stop + 60) {
      c = haloColor + (255 - haloColor) * sin(map(time, exhale, stop + 60, PI / 2, PI));
    }
    else {
      if (time >= exhale && time <= repeat) {
        c = haloColor + (255 - haloColor) * sin(map(time, exhale, exhale + 60, PI / 2, PI));
      }
      pos.y  = height / 2 + height * edge * sin(map(time, exhale, stop, PI / 2, 3 * PI / 2));
      bubble = bubbleSize + bubbleGrowth * sin(map(time, exhale, stop, 3 * PI / 2, PI / 2));
      halo   = haloSize + haloGrowth * sin(map(time, exhale, stop, 3 * PI / 2, PI / 2));
    }
  }
}
