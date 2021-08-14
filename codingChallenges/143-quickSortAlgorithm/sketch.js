let values = []
let w = 10

const states = []

const sleep = (ms) => new Promise(res => setTimeout(res, ms))

const swap = async (arr, a, b) => {
  await sleep(50)

  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(5)

  values = new Array(floor(width / w))

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height)
    states[i] = -1
  }

  quickSort(values, 0, values.length - 1)
}

const partion = async (arr, start, end) => {
  for (let i = start; i < end; i++) {
    states[i] = 1
  }

  let pivotIndex = start
  const pivotValue = arr[end]
  states[pivotIndex] = 0

  for (let i = start; i < end; i++) {
    const current  = arr[i]

    if (current < pivotValue) {
      await swap(arr, i, pivotIndex)
      states[pivotIndex] = -1
      pivotIndex++
      states[pivotIndex] = 0
    }
  }

  await swap(arr, pivotIndex, end)

  for (let i = start; i < end; i++) {
    if (i !== pivotIndex) {
      states[i] = -1
    }
  }

  return pivotIndex
}

const quickSort = async (arr, start, end) => {
  if (start >= end) return

  const index = await partion(arr, start, end)
  states[index] = -1

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ])
}

function draw () {
  background(51)

  for (let i = 0; i < values.length; i++) {
    fill(255)
    noStroke()

    if (states[i] === 0) {
      fill('#e0777d')
    }
    else if (states[i] === 1) {
      fill('#d6ffb7')
    }

    rect(i * w, height - values[i], w, values[i])
  }
}
