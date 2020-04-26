const num = 23
const nums = [100, 175, 72, 12]
const words = ['rainbow', 'purple', 'friendship', 'butterfly', 'lollipop']

let index = 0

function setup () {
  createCanvas(windowWidth - 30, windowHeight - 30)
}

function draw () {
  background(0)
  fill(100, 0, 255)
  ellipse(500, 200, num, num)

  for (let i = 0; i < nums.length; i++) {
    ellipse(i * 100 + 100, 200, nums[i] / 2)
  }

  fill(200, 255, 150)
  textSize(32)

  for (let i = 0; i < words.length; i++) {
    text(words[i], 130 * i, 40)
  }

  text(words[index], 50, 240)
}

function mousePressed () {
  if (index === words.length - 1 ) {
    index = 0
  } else {
    index++
  }
}
