let table
let afinn = {}

function toJsonFile () {
  // Loads the file into a local associative array
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i)
    let word = row.get(0)
    let score = row.get(1)
    afinn[word] = score
  }
  save(afinn, 'afinn-111.json')
}

function preload () {
  // Returns a p5.Table object
  // table = loadTable('AFINN-111.txt', 'tsv')
  afinn = loadJSON('afinn-111.json')
}

function setup() {
  // This will create a JSON file from the txt and download it
  // toJsonFile()
  noCanvas()

  let txt = select('#textArea')
  txt.input(typing)

  function typing () {
    let totalScore = 0
    // Stored the found words
    let scoredWords = []
    // Split the string by any other chat than a-Z0-9
    let input = txt.value()
    let words = input.split(/\W/)

    // For each word in the list
    for (let i = 0; i < words.length; i++) {
      // JSON keys only have lowecase
      let word = words[i].toLowerCase()

      // This is the same as afinn[word]
      if (afinn.hasOwnProperty(word)) {
        let score = afinn[word]
        // Convert the value into int and add to my found word list
        totalScore += Number(score)
        scoredWords.push(' ' + word + ': ' + score)
      }
    }

    let pScore = select('#afinnScore')
    pScore.html('Score ' + totalScore)
    let pComp = select('#afinnComp')
    pComp.html('Comparative ' + totalScore / words.length)
    let pWords = select('#afinnWords')
    pWords.html('Words list ' + scoredWords )
  }
}
