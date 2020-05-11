/*
 * Traveling salesman algorithm
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://en.wikipedia.org/wiki/Travelling_salesman_problem
 */

const TOTAL_CITIES = 10

let bestEver
let recordDistance

let cities = []

function setup() {
  createCanvas(400, 400)

  // Loading array of spots
  for (let i = 0; i < TOTAL_CITIES; i++) {
    let v = createVector(random(width), random(height))
    cities[i] = v
  }

  // Keep record of the distance
  let d = calcDistance(cities)
  recordDistance = d
  bestEver = cities.slice()
}

function draw() {
  background(0)

  // Display spots
  fill(255)
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8)
  }

  // Drawing a path between the spots
  strokeWeight(1)
  noFill()
  stroke(255)
  beginShape()
    for (let i = 0; i < cities.length; i++) {
      vertex(cities[i].x, cities[i].y)
    }
  endShape()

  // Drawing the bestEver to see
  strokeWeight(4)
  noFill()
  stroke(255, 0, 255)
  beginShape()
    for (let i = 0; i < bestEver.length; i++) {
      vertex(bestEver[i].x, bestEver[i].y)
    }
  endShape()

  // Shuffling
  let i = floor(random(cities.length))
  let j = floor(random(cities.length))
  swap(cities, i, j)

  // After swaping, we calculate again the length
  // and keep a copy of the best option
  let d = calcDistance(cities)
  if (d < recordDistance) {
    recordDistance = d
    bestEver = cities.slice()
  }
}

// Function for shuffling array while drawing
function swap (a, i, j) {
  // Simple swap algorithm
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

// Calculates the distances between the spots of the array and saves the lowest
function calcDistance (points) {
  let sum = 0
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
    sum += d
  }
  return sum
}
