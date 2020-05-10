class Tree {
  constructor () {
    this.leaves = []
    this.branches = []

    // Filling the leaves
    for (let i = 0; i < LEAVES; i++) {
      this.leaves.push(new Leaf())
    }

    // We initialized with the root that has no parents and
    // start our branch
    let pos = createVector(width/2, height)
    let dir = createVector(0, -1)
    this.root = new Branch(null, pos, dir)
    this.branches.push(this.root)

    // Initialized the current position
    let current = this.root
    let found = false

    while (!found) {
      // Check the distance between the root and any other leaves to
      // get the closest and farthest
      for (let i = 0; i < this.leaves.length; i++) {
        let d = p5.Vector.dist(current.pos, this.leaves[i].pos)
        if (d < maxDist) {
          found = true
        }
      }

      // If nothing is found, we need to create a new branch
      // that will create the secuence of segments
      if (!found) {
        let branch = current.next()
        current = branch
        this.branches.push(current)
      }
    }
  }

  grow () {
    // For every single leaf
    for (let i = 0; i < this.leaves.length; i++) {
      let leaf = this.leaves[i]

      // Trackers
      let closestBranch = null
      let recordDist = Infinity
      // Look for the closest branch to it
      for (let j = 0; j < this.branches.length; j++) {
        let branch = this.branches[j]
        let d = p5.Vector.dist(leaf.pos, branch.pos)

        // Within the min and max distance
        if (d < minDist) {
          leaf.reached = true
          break
        } else if (d > maxDist) {

        } else if (closestBranch === null || d < recordDist) {
          // if it's out of boundaries, this is the closest
          closestBranch = branch
          recordDist = d
        }
      }

      // This means we found something
      // we need to create a new branch pointing to that leaf
      if (closestBranch != null) {
        let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos)
        newDir.normalize()
        closestBranch.dir.add(newDir)
        closestBranch.count++
      }
    }


    // We delete the found leaf
    for (let i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1)
      }
    }

    // And we look every branch to figure out which branches were
    // attracted to what leaves and reset it
    for (let i = this.branches.length - 1; i >= 0; i--) {
      let branch = this.branches[i]

      // Averaging
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1)
        this.branches.push(branch.next())
      }
    }
  }

  show () {
    for (let i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show()
    }

    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].show()
    }
  }
}
