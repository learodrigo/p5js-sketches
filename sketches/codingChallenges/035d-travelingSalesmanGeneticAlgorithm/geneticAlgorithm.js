// We give fitness point to each element in the population
function calculateFitness () {
  let currentRecord = Infinity
  for (let i = 0; i < population.length; i++) {
    let d = calcDistance(cities, population[i])
    if (d < recordDistance) {
      recordDistance = d
      bestEver = population[i]
    }
    if (d < currentRecord) {
      currentRecord = d
      currentBest = population[i]
    }
    // The higher position lower value and viceversa
    // We add 1 to d just in case it's 0
    fitness[i] = 1 / (d + 1)
  }
}

// Normalizing fitness data in percentage
function normalizeFitness () {
  let sum = 0
  // Suming all the values from fitness
  for (let i = 0; i < fitness.length; i++) {
    sum += fitness[i]
  }
  // Making the values percentages
  for (let i = 0; i < fitness.length; i++) {
    fitness[i] /= sum
  }
}

// For every member of the current population, create a new
// random new population
function nextGeneration () {
  let newPopulation = []
  for (let i = 0; i < population.length; i++) {
    let orderA = pickOne(population, fitness)
    let orderB = pickOne(population, fitness)
    let order = crossOver(orderA, orderB)
    mutate(order, 0.01)
    newPopulation[i] = order
  }
  population = newPopulation
}

// It will pick a number in the section where it has a higher
// number of posibilities %
function pickOne (list, prob) {
  let index = 0
  let r = random(1)

  while (r > 0) {
    r = r - prob[index]
    index++
  }

  index--
  return list[index].slice()
}

// Mix 2 arrays from a random place and the end of the array,
// then pick the remaining values from the other array
function crossOver (a, b) {
  let start = floor(random(a.length))
  let end = floor(random(start + 1, a.length))
  let newOrder = a.slice(start, end)

  //
  for (let i = 0; i < b.length; i++) {
    let city = b[i]
    // If the city doesnt exist, we add it
    if (!newOrder.includes(city)) {
      newOrder.push(city)
    }
  }

  return newOrder
}

// Swaps cities according to the chances that has to change
function mutate (order, mutationRate) {
  for (let i = 0; i< TOTAL_CITIES; i++) {
    if (random(1) < mutationRate) {
      let indexA = floor(random(order.length))
      let indexB = (indexA + 1) % TOTAL_CITIES
      swap(order, indexA, indexB)
    }
  }
}
