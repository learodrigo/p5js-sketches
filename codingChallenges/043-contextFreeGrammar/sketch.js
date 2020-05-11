const RULES = {
  "S": [
    ["NP", "VP"],
    ["Interj", "NP", "VP"]
  ],
  "NP": [
    ["Det", "N"],
    ["Det", "N", "that", "VP"],
    ["Det", "Adj", "N"]
  ],
  "VP": [
    ["Vtrans", "NP"],
    ["Vintr"]
  ],
  "Interj": [
    ["oh"],
    ["my"],
    ["wow"],
    ["darn"]
  ],
  "Det": [
    ["this"],
    ["that"],
    ["the"]
  ],
  "N": [
    ["amoeba"],
    ["dichotomy"],
    ["seagull"],
    ["trombone"],
    ["overstaffed"],
    ["corsage"]
  ],
  "Adj": [
    ["bald"],
    ["smug"],
    ["important"],
    ["tame"],
    ["overstaffed"],
    ["corsage"]
  ],
  "Vtrans": [
    ["computes"],
    ["examines"],
    ["foregrounds"],
  ],
  "Vintr": [
    ["coughs"],
    ["daydreams"],
    ["whines"],
  ]
}

let button

// Recursion function
function expand(start, expansion) {
  // Recursive condition
  if (RULES[start]) {
    // Change the value of start and over
    let pick = random(RULES[start])

    // As RULES is an [][], we loop through it
    for (let i = 0; i < pick.length; i++) {
      // And repeat for each word inside
      expand(pick[i], expansion)
    }
  } else {
    expansion.push(start)
  }

  return expansion.join(' ')
}

function cfg () {
  let start = 'S'
  let expansion = []
  let result = expand(start, expansion)
  createP(result)
}

function setup () {
  noCanvas()
  button = createButton('Generate')
  button.mousePressed(cfg)
}
