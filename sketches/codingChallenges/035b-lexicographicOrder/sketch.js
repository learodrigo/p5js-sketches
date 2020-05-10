/*
 * Lexicographic ordering algorithm
 * Having ABCD it gives you the next possible alphabetical order = ABDC ACBD ...
 *
 * https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
 */

let vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function setup(){
  createCanvas(windowWidth, windowHeight)
  frameRate(1)
}

function draw () {
  background(0)

  // STEP 1
  // Find the largest x such that P[i]<P[i+1]
  let largestI = -1
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] < vals[i + 1]) {
      largestI = i
    }
  }
  // If there is no such x, P is the last permutation
  if (largestI === -1) {
    noLoop()
    print('finished')
  }

  // STEP 2
  // Find the largest y such that P[i]<P[j].
  let largestJ = -1
  for (let j = 0; j < vals.length; j++) {
    if (vals[largestI] < vals[j]) {
      largestJ = j
    }
  }

  // STEP 3
  // Swap P[i] and P[j]
  swap(vals, largestI, largestJ)

  // STEP 4
  // Reverse P[largestI+1 .. end]
  let endArr = vals.splice(largestI + 1)
  endArr.reverse()
  vals = vals.concat(endArr)

  // Printing all the possibilities
  textSize(64)
  let s = ''
  for (let i = 0; i< vals.length; i++) {
    s += vals[i]
  }
  fill(255)
  text(s, 20, height / 2)

}

// Function for shuffling array while drawing
function swap (a, i, j) {
  // Simple swap algorithm
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}
