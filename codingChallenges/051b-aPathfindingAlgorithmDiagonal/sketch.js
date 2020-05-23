/**
 * A* Pathfinding Algorithm
 * Heuristic algorithm, means it skips previous ways if the current state looks
 * fine, it's assuming what's done is ok. It uses an educated guest
 *
 * https://en.wikipedia.org/wiki/A*_search_algorithm
 * http://aima.cs.berkeley.edu/
 * Check CC010
 */


let cols = 50
let grid = new Array(cols)
let rows = 50
let w, h

// The set of discovered nodes that may need to be (re-)expanded.
// Initially, only the start node is known.
let openSet = []
// For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start to n currently known.
let closedSet = []
let start
let end
let current

let path = []

function setup() {
  createCanvas(500, 500)

  // Setting my spots size
  w = width / cols
  h = height / rows

  // 2D array
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
  }

  // Creates an object in each spot
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j)
    }
  }
  // Once we have the grid, we add the neighbors to be checked
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid)
    }
  }


  // Top-Left
  start = grid[0][0]
  // Bottom-Right
  end = grid[cols - 1][rows - 1]
  // As we have random walls, we need to clean the edges
  // or it will never finish
  start.wall = false
  end.wall = false

  // Starting from the beginnig
  openSet.push(start)

}

function draw() {

  // while openSet is not empty
  if (openSet.length) {
    // current := the node in openSet having the lowest fScore[] value
    let winner = 0
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f  < openSet[winner].f) {
        winner = i
      }
    }

    current = openSet[winner]
    if (current === end) {
      // We finish
      solution.innerHTML = 'Done!'
      noLoop()
    }

    // openSet.Remove(current)
    removeFromArray(openSet, current)
    closedSet.push(current)

    // for each neighbor of current
    let neighbors = current.neighbors
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i]
      // d(current,neighbor) is the weight of the edge from current to neighbor
      // As long as is not included and has no walls, add the value
      if (!closedSet.includes(neighbor) &&
         !neighbor.wall) {
      // tempG is the distance from start to the neighbor through current
        let tempG = current.g + 1

        let newPath = false
        // Is this already in the openSet?
        if (openSet.includes(neighbor)) {
          // if tempG < gScore[neighbor]
          if (tempG < neighbor.g) {
            // This path to neighbor is better than any previous one
            neighbor.g = tempG
            newPath = true
          }
        } else {
          // gScore[neighbor] := tentative_gScore
          newPath = true
          neighbor.g = tempG
          openSet.push(neighbor)
        }

        if (newPath) {
          // Calculating the heuristic aka educated guest
          neighbor.h = heuristic(neighbor, end)
          // This is my score of that specific spot
          neighbor.f = neighbor.g + neighbor.h
          neighbor.previous = current
        }
      }
    }

  } else {
    solution.innerHTML = 'No solution :('
    noLoop()
    return
  }

  background(0)

  // DEBUGGER
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(255)
    }
  }

  // RED
  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0))
  }
  // GREEN
  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0))
  }

  path = []
  let temp = current
  path.push(temp)
  while (temp.previous) {
    path.push(temp.previous)
    temp = temp.previous
  }

  // BLUE
  for (let i = 0; i < path.length; i++) {
    path[i].show(color(0, 0, 255))
  }

}

// Simple function that removes an element from an array
function removeFromArray (arr, el) {
  // We go backwards because if we remove 1 element, it moves back 1 i,
  // and we skip that element
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === el) {
      arr.splice(i, 1)
    }
  }
}

// Returns how far away I'm from here to the end
function heuristic (a, b) {
  // return abs(a.i - b.i) + abs(b.j - b.j)
  return dist(a.i, a.j, b.i, b.j)
}
