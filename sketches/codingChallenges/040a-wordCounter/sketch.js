let txt

let counts = {}
let keys = []

function preload () {
  // Load the text in an array of lines of text
  txt = loadStrings('rainbow.txt')
}

function setup() {
  createCanvas(600, 400)
  background(123)
  // Joins the lines of text
  let allWords = txt.join('\n')
  // Split into individual words
  // \w+ accepts a-zA-z0-9, so \W+ accepts the rest ! @#$%^& ,.>
  let tokens = allWords.split(/\W+/)

  // Check each word
  for (let i = 0; i < tokens.length; i++) {
    // It's the same if the word is written in lower or uppercase in English
    let word = tokens[i].toLowerCase()

    // Regex for string of digits
    if (!/\d+/.test(word)) {
      // If the word exists in my dictionary
      if (counts[word] === undefined) {
        // Add 1 to the counter
        counts[word] = 1
        keys.push(word)
      } else {
        // Set the value to that word to 1
        counts[word] += 1
      }
    }
  }

  // By default js.sort is alphabetically
  keys.sort((a, b) => {
    let cA = counts[a]
    let cB = counts[b]
    return cB - cA
  })

  // Showing key = values
  for (let i = 0; i < keys.length; i++) {
    // Canvas

    // word
    let key = keys[i]
    // number of appereances / 3
    let c = counts[key] / 2.5
    textSize(c)

    // Word cloud with font-size according to number of appereances
    let x = random(width)
    let y = random(height)
    text(key, x, y)

    // DOM manipulation
    createDiv(i+1 + ". " + key + " = " + counts[key])
  }
}
