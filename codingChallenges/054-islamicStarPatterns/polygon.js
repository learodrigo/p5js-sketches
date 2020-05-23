class Polygon {
  constructor(n) {
    this.edges = []
    this.vertices = []
    this.sides = n
  }

  addVertex(x, y) {
    let a = createVector(x, y)
    let total = this.vertices.length

    if (total) {
      let prev = this.vertices[total - 1]
      let edge = new Edge(prev, a)
      this.edges.push(edge)
    }

    this.vertices.push(a)
  }

  close() {
    let first = this.vertices[0]
    let last = this.vertices.slice(-1).pop()
    let edge = new Edge(last, first)
    this.edges.push(edge)
  }

  hankin() {
    for (let e of this.edges) {
      e.hankin(this.sides)
    }
  }

  show() {
    for (let e of this.edges) {
      e.show()
    }
  }
}
