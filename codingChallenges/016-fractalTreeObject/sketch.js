let tree = []
let leave = []
let cont = 0

function setup() {
  createCanvas(400, 400)
  let a = createVector(width / 2, height)
  let b = createVector(width / 2, height - 100)
  let root = new Branch(a, b)

  tree[0] = root
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA())
      tree.push(tree[i].branchB())
    }

    tree[i].finished = true
  }
  cont++

  if (cont % 2 === 0 && cont < 10) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy()
        leave.push(leaf)
      }
    }
  }
}

function draw() {
  background(25)

  for (let i = 0; i < tree.length; i++) {
    tree[i].show()
    // tree[i].jitter()
  }

  for (let i = 0; i < leave.length; i++) {
    fill(255, 0, 100, 100)
    noStroke()
    ellipse(leave[i].x, leave[i].y, 8)
  }
}
