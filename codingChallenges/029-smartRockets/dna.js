class DNA {
  constructor (genes) {
    if (genes) {
      this.genes = genes
    } else {
      this.genes = []
      for (let i = 0; i < LIFESPAN; i++) {
        this.genes[i] = p5.Vector.random2D()
        this.genes[i].setMag(MAX_FORCE)
      }
    }
  }

  crossover (partner) {
    let newGenes = []
    let mid = floor(random(this.genes.length))
    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newGenes[i] = this.genes[i]
      } else {
        newGenes[i] = partner.genes[i]
      }
    }

    return new DNA(newGenes)
  }

  mutation () {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D()
        this.genes[i].setMag(MAX_FORCE)

      }
    }
  }
}
