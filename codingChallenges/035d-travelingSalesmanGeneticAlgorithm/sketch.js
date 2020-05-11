/*
 * Traveling salesman with Genetic algorithm and crossover
 * This algorithm tries random values and improves according to what it receives
 *
 * Crossover - https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
 * https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/tree/master/week2-evolution
 * https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning
 * improve pool selection video - https://www.youtube.com/watch?v=ETphJASzYes
 * js Set obj - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

const TOTAL_CITIES = 12
const POPULATION_SIZE = 500

let bestEver
let currentBest

let cities = []
let fitness = []
let population = []
let recordDistance = Infinity

function setup() {
  createCanvas(windowWidth, windowHeight)

  let order = []

  // Loading array of spots
  for (let i = 0; i < TOTAL_CITIES; i++) {
    let v = createVector(random(width), random(height / 2))
    cities[i] = v
    order[i] = i
  }

  // We make an ordered copy to be shuffled and be used as population
  for (let i = 0; i < POPULATION_SIZE; i++) {
    population[i] = shuffle(order)
  }
}

function draw() {
  background(0)

  // Generic algorithm
  calculateFitness()
  normalizeFitness()
  nextGeneration()

  // Drawing the bestEver
  strokeWeight(4)
  noFill()
  stroke(255, 0, 255, 100)
  beginShape()
    for (let i = 0; i < bestEver.length; i++) {
      let n = bestEver[i]
      vertex(cities[n].x, cities[n].y)
      ellipse(cities[n].x, cities[n].y, 8)
    }
  endShape()


  // Drawing the current Best
  translate(0, height / 2)
  strokeWeight(1)
  noFill()
  stroke(255)
  beginShape()
    for (let i = 0; i <  currentBest.length; i++) {
      let n =  currentBest[i]
      vertex(cities[n].x, cities[n].y)
    }
  endShape()
}

/**
 * Private methods
 */
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

// Function for shuffling array while drawing
function swap (a, i, j) {
  // Simple swap algorithm
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}
