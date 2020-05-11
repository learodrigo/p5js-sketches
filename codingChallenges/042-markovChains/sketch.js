// https://en.wikipedia.org/wiki/Andrey_Markov
// https://books.google.com/ngrams
// https://en.wikipedia.org/wiki/N-gram
// https://www.chrisharrison.net/index.php/Visualizations/WebTrigrams
// http://www.decontextualize.com/
// http://setosa.io/ev/markov-chains/
// https://soundcloud.com/fl00per/perlin-noise

const ORDER = 3
// const TXT = 'The theramin is theirs, ok? Yes, it is. This is a theramin'
const TXT = "The unicorn is a legendary creature that has been described since antiquity as a beast with a large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian.[1] The Bible also describes an animal, the re'em, which some translations have erroneously rendered with the word unicorn.[1] In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard). In the Middle Ages and Renaissance, it was commonly described as an extremely wild woodland creature, a symbol of purity and grace, which could only be captured by a virgin. In the encyclopedias its horn was said to have the power to render poisoned water potable and to heal sickness. In medieval and Renaissance times, the tusk of the narwhal was sometimes sold as unicorn horn."

let unicornButton
let namesButton
let names

let beginnings = []
let nGramsNames = {}
let nGramsUnicorn = {}

function preload () {
  names = loadStrings('names.txt')
}

function setup() {
  noCanvas()


  // UNICORN
  // Extracts from the text certain amounts of particles
  // that have ORDER amount of letter. In order to not let,
  // have indexes with viudas, ORDER has to be substract
  for (let i = 0; i <= TXT.length - ORDER; i++) {

    // substring = i <= text < ORDER
    let gram = TXT.substring(i, ORDER + i)

    // Track if the particle exists or not
    if (!nGramsUnicorn[gram]) {
      nGramsUnicorn[gram] = []
    }
    // Add the next char
    nGramsUnicorn[gram].push(TXT.charAt(i + ORDER))
  }


  // NAMES
  for (let j = 0; j <= names.length - ORDER; j++) {
    let text = names[j]
    for (let i = 0; i <= text.length - ORDER; i++) {
      // substring = i <= text < ORDER
      let gram = text.substring(i, ORDER + i)

      if (i === 0) {
        beginnings.push(gram)
      }

      // Track if the particle exists or not
      if (!nGramsNames[gram]) {
        nGramsNames[gram] = []
      }
      // Add the next char
      nGramsNames[gram].push(text.charAt(i + ORDER))
    }
  }

  // Events
  unicornButton = createButton('Unicorn')
  unicornButton.mousePressed(markovUnicorn)
  namesButton = createButton('Names')
  namesButton.mousePressed(markovNames)
}

function markovUnicorn () {
  let currentGram = TXT.substring(0, ORDER)
  let result = currentGram

  for (let i = 0; i < 100; i++) {
    let possibilities = nGramsUnicorn[currentGram]
    if (!possibilities) break
    let next = random(possibilities)
    result += next
    let len = result.length
    currentGram = result.substring(len - ORDER, len)
  }

  createP(result)
}

function markovNames () {
  let currentGram = random(beginnings)
  let result = currentGram

  for (let i = 0; i < 20; i++) {
    let possibilities = nGramsNames[currentGram]
    if (!possibilities) break
    let next = random(possibilities)
    result += next
    let len = result.length
    currentGram = result.substring(len - ORDER, len)
  }

  createP(result)
}
