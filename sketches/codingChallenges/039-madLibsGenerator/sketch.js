// https://en.wikipedia.org/wiki/Mad_Libs
// https://shiffman.net/a2z/data-apis/
// https://docs.google.com/spreadsheets/d/15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs/pubhtml
// https://github.com/jsoma/tabletop

let data
let text = '$$Exclamation$$! They said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.'

function setup () {
  noCanvas()

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs/pubhtml',
    callback: gotData,
    simpleSheet: true
  })

  let button = createButton('Generate MadLib')
  button.mousePressed(generate)
}

// js replace function can have a callback that returns the full match
// and the group one which is the part of speech
function replacer (match, pos) {
  let aux = random(data)
  let entry = aux

  // There's a annoyed faked XXS entry
  if (/(<([^>]+)>)/ig.test(aux[pos])) {
    entry = aux.replace(/(<([^>]+)>)/ig, '')
  }

  return entry[pos]
}

function generate () {
  // skip $ skip $ (start whatever is inside) skip $ skip $
  // and global to match all
  let madlib = text.replace(/\$\$(.*?)\$\$/g, replacer)
  createP(madlib)
}

function gotData (stuff, tabletop) {
  data = stuff
}
