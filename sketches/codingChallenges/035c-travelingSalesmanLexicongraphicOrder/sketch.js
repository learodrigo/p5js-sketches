/*
 * Traveling salesman with Lexicograph order algorithm
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://en.wikipedia.org/wiki/Travelling_salesman_problem
 */

const TOTAL_CITIES = 7

let bestEver
let recordDistance
let totalPermutations

let cities = []
let count = 0
let order = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  // Loading array of spots
  for (let i = 0; i < TOTAL_CITIES; i++) {
    let v = createVector(random(width), random(height / 2))
    cities[i] = v
    order[i] = i
  }

  // Keep record of the distance
  let d = calcDistance(cities, order)
  recordDistance = d
  bestEver = order.slice()

  // Percentage to know how far from the end I am
  totalPermutations = factorial(TOTAL_CITIES)
}

function draw() {
  background(0)

  // Display spots
  fill(255)
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8)
  }

  // Drawing the bestEver to see
  strokeWeight(4)
  noFill()
  stroke(255, 0, 255, 100)
  beginShape()
    for (let i = 0; i < order.length; i++) {
      let n = bestEver[i]
      vertex(cities[n].x, cities[n].y)
    }
  endShape()

  // Drawing a path between the spots
  translate(0, height / 2)
  strokeWeight(1)
  noFill()
  stroke(255)
  beginShape()
    for (let i = 0; i < order.length; i++) {
      let n = order[i]
      vertex(cities[n].x, cities[n].y)
    }
  endShape()

  // After swaping, we calculate again the length
  // and keep a copy of the best option
  let d = calcDistance(cities, order)
  if (d < recordDistance) {
    recordDistance = d
    bestEver = order.slice()
  }


  // Printing all the possibilities
  // textSize(64)
  // let s = ''
  // for (let i = 0; i< order.length; i++) {
  //   s += order[i]
  // }
  // fill(255)
  // noStroke()
  // text(s, 0, height / 2)

  // Print percentage
  let perc = 100 * count / totalPermutations
  text(nf(perc, 0, 2) + '% completed', 0, height / 2)


  lexicographOrderAlgorithm()
}

// Function for shuffling array while drawing
function swap (a, i, j) {
  // Simple swap algorithm
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

// Calculates the distances between the spots of the array and saves the lowest
function calcDistance (points, order) {
  let sum = 0
  for (let i = 0; i < order.length - 1; i++) {
    let cityA = points[ order[i]     ]
    let cityB = points[ order[i + 1] ]
    let d = dist(cityA.x, cityA.y, cityB.x, cityB.y)
    sum += d
  }
  return sum
}

function lexicographOrderAlgorithm () {
  // STEP 1
  // Find the largest x such that P[i]<P[i+1]
  let largestI = -1
  for (let i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i
    }
  }
  // If there is no such x, P is the last permutation
  if (largestI === -1) {
    noLoop()
    print('finished')
  }

  // STEP 2
  // Find the largest y such that P[i]<P[j].
  let largestJ = -1
  for (let j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j
    }
  }

  // STEP 3
  // Swap P[i] and P[j]
  swap(order, largestI, largestJ)

  // STEP 4
  // Reverse P[largestI+1 .. end]
  let endArr = order.splice(largestI + 1)
  endArr.reverse()
  order = order.concat(endArr)

  // To get the % of permutations
  count++
}

function factorial (n) {
  return (n !== 1) ? n * factorial(n - 1) : 1
}
