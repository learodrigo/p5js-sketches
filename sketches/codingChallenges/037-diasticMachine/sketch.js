// https://en.wikipedia.org/wiki/Jackson_Mac_Low

// TODO:
//   - Add description of what this program does
//   - Error checking if I'm at the end of the array and dont have where to look
//   - What if no word exists with that char in there
//   - Track all the possible words for the match and pick a random one
//   - Data sanitation

let srcTxt
let words

function diastic (seed, words) {
  // After a word is found, we need to check for the next word from that one, so we keep track of that index here
  let currentWord = 0
  let phrase = ''
  let a = []

  for (let i = 0; i < seed.length; i++) {
    // Take a letter from the index to search
    let c = seed.charAt(i)

    // Searching
    for (let j = currentWord; j < words.length; j++) {
      // If the index character of the word is the same as the letter
      if (words[j].charAt(i) === c) {
        phrase += words[j]
        phrase += ' '
        // Update the index
        currentWord = j + 1
        break
      }
    }
  }

  return phrase
}

function preload () {
  // It loads an array with each line of text
  srcTxt = loadStrings('./text.txt')
}

function setup() {
  noCanvas()
  // Get rid of the array to have a string
  srcTxt = join(srcTxt, ' ')
  // Creating an array of words
  words = splitTokens(srcTxt, ' _–,.!?-')

  let seed = select('#seed')
  let submit = select('#submit')
  // Could go an anonymous function (functions without name)
  submit.mousePressed(() => {
    let phrase = diastic(seed.value(), words)
    createP(phrase)
  })
}
