class Stream {
  constructor() {
    this.symbols = []
    this.totalSymbols = round(random(5, 30))
    this.speed = random(5, 10)
  }

  generateSymbols(x, y) {
    let first = round(random(4)) === 1
    for (let i = 0; i <= this.totalSymbols; i++) {
      this.symbols.push(new Symbolz(x, y, this.speed, first))
      this.symbols[i].setToRandomSymbol()
      y -= symbolSize
      first = false
    }
  }

  render() {
    for (let s of this.symbols) {
      if (s.first) {
        fill(200, 255, 200)
      } else {
        fill(0, 255, 70)
      }
      textSize(symbolSize)
      s.setToRandomSymbol()
      text(s.value, s.x, s.y)
      s.rain()
    }
  }
}
