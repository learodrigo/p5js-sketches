/*
 * create a map visualization of Coding Train subscriber locations around the world
 *
 * https://mappa.js.org/docs/simple-map.html
 * https://medium.com/processing-foundation/maps-maps-maps-f0914218c87b
 * https://gist.github.com/sindresorhus/1341699
 * https://leafletjs.com/
 */

// Mappa.js
const mappa = new Mappa('Leaflet')
const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

let canvas
let countries
let youtubeData
let trainMap

let data = []

function preload () {
  youtubeData = loadTable('subscribers_geo.csv', 'header')
  countries = loadJSON('countries.json')
}

function setup() {
  // Initializing
  canvas = createCanvas(windowWidth, windowHeight - 20)
  trainMap = mappa.tileMap(options)
  // Overlaying
  trainMap.overlay(canvas)

  // They'll be used for mapping the diam
  let maxSubs = 0
  let minSubs = Infinity

  // Initializing data array
  for (let row of youtubeData.rows) {
    const country = row.get('country_id').toLowerCase()
    const latlon = countries[country]
    if (latlon) {
      // Getting position
      const lat = latlon[0]
      const lon = latlon[1]
      // Getting diameter
      const subCount = Number(row.get('subscribers'))
      // Data
      data.push({lat, lon, subCount})

      if (subCount > maxSubs) maxSubs = subCount
      if (subCount < minSubs) minSubs = subCount
    }
  }

  // Add diameter
  let minD = sqrt(minSubs)
  let maxD = sqrt(maxSubs)

  for (let country of data) {
    country.diameter = map(sqrt(country.subCount), minD, maxD, 1, 15)
  }
}

function draw() {
  clear()
  for (let country of data) {
    const pix = trainMap.latLngToPixel(country.lat, country.lon)
    const scl = pow(2, trainMap.zoom())
    const diam = country.diameter * scl

    fill(255, 0, 200, 100)
    stroke(0, 100)
    ellipse(pix.x, pix.y, diam)
  }
}
