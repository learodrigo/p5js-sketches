class Box {
  constructor (x, y, z, r) {
    this.pos = createVector(x, y, z)
    this.r = r
  }

  show () {
    push()
    translate(this.pos.x, this.pos.y, this.pos.z)
    fill(255)
    noStroke()
    box(this.r)
    pop()
  }

  generate () {
    let boxes = []
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {

          let sum = abs(x) + abs(y) + abs(z)
          let newR = this.r/3

          if (sum > 1) {
            let b = new Box(
              this.pos.x + x * newR,
              this.pos.y + y * newR,
              this.pos.z + z * newR,
              newR
            )
            boxes.push(b)
          }

          // // Center ones
          // if (sum <= 1) {
          //   let b = new Box(
          //     this.pos.x + x * newR,
          //     this.pos.y + y * newR,
          //     this.pos.z + z * newR,
          //     newR
          //   )
          //   boxes.push(b)
          // }

        }
      }
    }
    return boxes
  }
}
