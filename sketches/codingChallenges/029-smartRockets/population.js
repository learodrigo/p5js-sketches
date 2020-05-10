class Population {
  constructor() {
    this.rockets = []
    this.matingPool = []

    for (let i = 0; i < ROCKETS; i++) {
      this.rockets[i] = new Rocket()
    }
  }

  evaluate () {
    // Normalize values for mating pool
    let maxFit = 0

    for (let i = 0; i < ROCKETS; i++) {
      this.rockets[i].calculateFitness()
      // Find the highest fitness
      if (this.rockets[i].fitness > maxFit) {
        maxFit = this.rockets[i].fitness
      }
    }

    for (let i = 0; i < ROCKETS; i++) {
      this.rockets[i].fitness /= maxFit
    }

    // Every time I use it, it should be a cleaned array
    this.matingPool = []

    // With the rockets fitness * 100 (between 0 - 1)
    // so that's the number of cances to be picked in the new
    // Population creation
    for (let i = 0; i < ROCKETS; i++) {
      let n = this.rockets[i].fitness * LIFESPAN/2
      for (let j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i])
      }
    }
  }

  selection () {
    let newRockets = []

    for (let i = 0; i < this.rockets.length; i++) {
      let parentA = random(this.matingPool).dna
      let parentB = random(this.matingPool).dna
      let childDNA = parentA.crossover(parentB)
      childDNA.mutation()
      newRockets[i] = new Rocket(childDNA)
    }

    this.rockets = newRockets
  }

  run () {
    for (let i = 0; i < ROCKETS; i++) {
      this.rockets[i].update()
      this.rockets[i].show()
    }
  }
}
