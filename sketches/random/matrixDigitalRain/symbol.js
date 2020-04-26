class Symbolz {
  constructor (_x, _y, _s, _f) {
    this.x = _x
    this.y = _y
    this.speed = _s
    this.first = _f
    this.value = undefined
    this.switchInterval = round(random(2, 24))
  }

  setToRandomSymbol () {
    if (frameCount % this.switchInterval === 0) {
      let val = 0x30A0 + round(random(96))
      this.value = String.fromCharCode(val)
    }
  }

  rain () {
    this.y = (this.y >= height) ? 0 : this.y + this.speed
  }
}
