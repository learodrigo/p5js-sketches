let ball = {
  x: 300,
  y: 200,
  r: 12,
  xSpeed: 4,
  ySpeed: -3
}

function setup () {
  createCanvas(windowWidth - 30, windowHeight - 30)
}

function draw () {
  background(0)
  // Ball properties
  displayBall()
  bounceBall()
  moveBall()
}

function displayBall () {
  stroke(255)
  strokeWeight(4)
  noFill()
  ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2)
}

function bounceBall () {
  if (ball.x > width - ball.r || ball.x < ball.r) {
    ball.xSpeed *= -1
  }

  if (ball.y > height - ball.r || ball.y < ball.r) {
    ball.ySpeed *= -1
  }
}

function moveBall () {
  ball.x += ball.xSpeed
  ball.y += ball.ySpeed
}
