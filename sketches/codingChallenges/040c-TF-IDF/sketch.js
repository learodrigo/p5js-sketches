// https://en.wikipedia.org/wiki/Tf%E2%80%93idf

let counts = {}
let files = ['tree.txt', 'test.txt', 'fish.txt', 'eclipse.txt', 'rainbow.txt', 'phadke.txt', 'sports.txt']
let keys = []
let txt = []

function preload () {
  for (let i = 0; i < files.length; i++) {
    // Load the text in an array of lines of text
    txt[i] = loadStrings('files/' + files[i])
  }
}

function setup() {
  // createCanvas(600, 400)
  // background(123)
  noCanvas()

  let allWords = []
  for (let i = 0; i < txt.length; i++) {
    // Joins the lines of text
    allWords[i] = txt[i].join('\n')
  }

  // Split into individual words
  // \w+ accepts a-zA-z0-9, so \W+ accepts the rest ! @#$%^& ,.>
  let tokens = allWords[0].split(/\W+/)

  // Check each word
  for (let i = 0; i < tokens.length; i++) {
    // It's the same if the word is written in lower or uppercase in English
    let word = tokens[i].toLowerCase()

    // Regex for string of digits
    if (!/\d+/.test(word)) {
      // If the word exists in my dictionary
      if (counts[word] === undefined) {
        // Add 1 to the counter
        counts[word] = {
          df: 0,
          tf: 1,
        }
        keys.push(word)
      } else {
        // Set the value to that word to 1
        counts[word].tf += 1
      }
    }
  }

  // Check each file
  let otherCounts = []
  for (let j = 0; j < allWords.length; j++) {
    let tempCounts =  {}
    let tokens = allWords[j].split(/\W+/)

    for (let k = 0; k < tokens.length; k++) {
      let _word = tokens[k].toLowerCase()
      if (!tempCounts[_word]) {
        tempCounts[_word] = true
      }
    }
    otherCounts.push(tempCounts)
  }

  // We need to check how many times appears
  // the words in other files, so for each key
  for (let i = 0; i < keys.length; i++) {
    let word = keys[i]

    for (let j = 0; j < otherCounts.length; j++) {
      let tempCounts = otherCounts[j]
      if (tempCounts[word]) {
        counts[word].df++
      }
    }

    // Calculates the score
    let wordObj = counts[word]
    wordObj.tfdif = wordObj.tf * log(files.length / wordObj.df)
  }

  // By default js.sort is alphabetically
  keys.sort((a, b) => {
    let cA = counts[a].tfdif
    let cB = counts[b].tfdif
    return cB - cA
  })

  // Showing key = values
  for (let i = 0; i < keys.length; i++) {
    // Word
    let key = keys[i]
    // Number of appereances
    let c = counts[key].tfdif
    textSize(c)

    // Word cloud with font-size according to number of appereances
    let x = random(width)
    let y = random(height)
    text(key, x, y)

    // DOM manipulation
    createDiv(i+1 + ". " + key + " = " + counts[key].tfdif)
  }
}
