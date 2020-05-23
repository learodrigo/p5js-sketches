/**
 * Mapping earthquake data visualization
 * Displays earthquakes as dots sizes according the number of them in the
 * last 30 days worldwide
 *
 * https://en.wikipedia.org/wiki/Web_Mercator_projection
 * Lib - https://docs.mapbox.com/mapbox.js/api/v3.0.1/
 * data - https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php
 */

const ACCESS_TOKEN = 'pk.eyJ1IjoibGVhcm9kcmlnbyIsImEiOiJjazZjNHVndGcwN285M2p0ZjExMm5heW83In0.6BL7_PjokBTcPc2b2FmaVw'
const PMS = {
  long: 0,
  lat: 0,
  zoom: 1,
  rot: 0,
  ang: 0
}
const CNV = {w: 1024, h: 500}
const PARAMS = PMS.long + ',' + PMS.lat + ',' + PMS.zoom + ',' + PMS.rot + ',' + PMS.ang + '/' + CNV.w + 'x' + CNV.h

let mapImg
let earthquakes

// Variables
let cLat = 0
let cLon = 0
// Berlin: 52.5200° N, 13.4050° E
// Vancouver: 49.2827° N, (-) 123.1207° E
let lat = 49.2827
let lon = -123.1207

function preload () {
  mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/'+PARAMS+'?access_token=' + ACCESS_TOKEN)
  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv')
}

// These two functions are for transform to the scale the map uses
function mercX (lon) {
  // Sanitizing data
  lon = radians(lon)
  let a = 256 / PI * pow(2, PMS.zoom)
  let b = lon + PI
  return a * b
}

function mercY (lat) {
  // Sanitizing data
  lat = radians(lat)
  let a = 256 / PI * pow(2, PMS.zoom)
  let b = tan(PI / 4 + lat / 2)
  let c = PI - log(b)
  return a * c
}

function setup() {
  createCanvas(CNV.w, CNV.h)
  translate(width / 2, height / 2)
  imageMode(CENTER)
  image(mapImg, 0, 0)

  // Displaying the dot
  // As we translatate the image, we need to calculate the spot
  // from the center (cx, cy) that's why we substract
  let cx = mercX(cLon)
  let cy = mercY(cLat)

  // Here we go through every row of the csv
  for (let i = 0; i < earthquakes.length; i++) {
    let data = earthquakes[i].split(/,/)
    let lat = data[1]
    let lon = data[2]
    let mag = data[4]
    let x = mercX(lon) - cx
    let y = mercY(lat) - cy

    // As the area of a circle changes drastically with only 1 pt,
    // we need a way to make the relation more accurate
    mag = pow(10, mag)
    mag = sqrt(mag)
    let magMax = sqrt(pow(10, 10))

    let d = map(mag, 0, magMax, 0, 180)
    fill(255, 0, 255, 200)
    stroke(255, 0, 255)
    ellipse(x, y, d)
  }
}
