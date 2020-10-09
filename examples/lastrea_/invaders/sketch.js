let n, size, x, y;

function setup() {
	createCanvas(200, 200);
	noLoop();
	noStroke();
	n = 4;
	size = width / (n * 2);
}

function draw() {
	background(0);
	renderInvader();
}

function renderInvader() {
	fill(255, 0, 0)

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n * 2; j++) {
			if (
				random(1) > 0.5 ||
				i === 0 && j === 0 ||
				i === 0 && j === n * 2 - 1 ||
				i === n * 2 - 1 && j === 0 ||
				i === n * 2 - 1 && j === n * 2 - 1
			) {
				rect(i * size, j * size, size, size);
				rect((n * 2 - 1 - i) * size, j * size, size, size);
			}
		}
	}

	x = int(random(0, n));
	y = int(random(0, n));

	fill(0, 0, 255);
	rect(x * size, y * size, size, size);
	rect((n * 2 - 1 - x) * size, y * size, size, size);
}
