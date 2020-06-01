let network;

function setup () {
  createCanvas(600, 600);
  network = new Network(1000, 20);
}

function draw () {
  background(0, 20);
  network.drawNetwork();
  network.startNetwork();
}
