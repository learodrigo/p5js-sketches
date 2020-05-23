class Player {
  constructor () {
    this.reset()
  }

  isSnadder () {
    let tile = tiles[this.spot]
    return( tile && tile.snadders)
  }

  move () {
    this.spot = this.next
  }

  moveSnadder () {
    let tile = tiles[this.spot]
    this.spot += tile.snadders
  }

  reset () {
    this.spot = 0
    this.roll = -1
    this.next = -1
  }

  rollDie () {
    this.roll = floor(random(1, 7))
    this.next = this.spot + this.roll
  }

  showPreview () {
    let start = max(0, this.spot)
    let end = min(this.next, tiles.length - 1)
    for (let i = start; i <= end; i++) {
      tiles[i].highlight()
    }
  }

  show () {
    let current = tiles[this.spot]
    if (!current) return
    let c = current.getCenter()
    push()
      fill(255, 0, 0)
      noStroke()
      ellipse(c.x, c.y, res * 0.75)
    pop()
  }
}
