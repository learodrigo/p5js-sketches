class Tile {
  constructor(img, edges) {
    this.img = img
    this.edges = edges

    this.up = []
    this.right = []
    this.down = []
    this.left = []
  }

  compareEdge(a, b) {
    return a == b.split("").reverse().join("")
  }

  analyzeReverse(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      // Up connection
      if (this.compareEdge(tiles[i].edges[2], this.edges[0])) {
        this.up.push(i)
      }
      // Right connection
      if (this.compareEdge(tiles[i].edges[3], this.edges[1])) {
        this.right.push(i)
      }
      // Down connection
      if (this.compareEdge(tiles[i].edges[0], this.edges[2])) {
        this.down.push(i)
      }
      // Left connection
      if (this.compareEdge(tiles[i].edges[1], this.edges[3])) {
        this.left.push(i)
      }
    }
  }

  analyze(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      // Up connection
      if (tiles[i].edges[2] === this.edges[0]) {
        this.up.push(i)
      }
      // Right connection
      if (tiles[i].edges[3] === this.edges[1]) {
        this.right.push(i)
      }
      // Down connection
      if (tiles[i].edges[0] === this.edges[2]) {
        this.down.push(i)
      }
      // Left connection
      if (tiles[i].edges[1] === this.edges[3]) {
        this.left.push(i)
      }
    }
  }

  rotate(num) {
    const w = this.img.width
    const h = this.img.height

    const newImage = createGraphics(w, h)

    newImage.imageMode(CENTER)
    newImage.translate(w / 2, h / 2)
    newImage.rotate(HALF_PI * num)
    newImage.image(this.img, 0, 0)

    const newEdges = []
    const len = this.edges.length
    for (let i = 0; i < len; i++) {
      newEdges.push(this.edges[(i - num + len) % len])
    }

    return new Tile(newImage, newEdges)
  }
}
