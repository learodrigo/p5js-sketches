let photo, n, s, nSquare, space;
let photos = [];

function preload () {
  photos.push(loadImage("https://images.unsplash.com/photo-1467139840664-96b244a66825?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1574631818614-c9f9d15ded52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1517489334980-b14732409167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1577138043155-7934dd897541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1570025796121-87d2d9b69ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1559140508-eef7299ddb96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
  photos.push(loadImage("https://images.unsplash.com/photo-1590227521023-e362889a3adb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"));
}

function setup () {
  createCanvas(600, 600);
  frameRate(2);
  stroke(255);
  n = 10;
  s = width / n;
  nSquare = 4;
  space = (n - nSquare) / 2;
  randomPhoto();
  photo.resize(width, height);
}

function draw () {
  image(photo, 0, 0);
  for (let i = space; i < n - space; i++) {
    for (let j = space; j < n - space; j++) {
      let x = floor(int(random(0, n - 1)));
      let y = floor(int(random(0, n - 1)));
      copy(photo, x*s, y*s, s, s, i*s, j*s, s, s);
    }
  }

  for (let i = space; i < n - (space - 1); i++) {
    for (let j = space; j < n - (space - 1); j++) {
      line(space * s, j * s, width - space * s, j * s);
    }
    line(i * s, space * s, i * s, height - space * s);
  }
}

function randomPhoto () {
  photo = random(photos);
}

function mousePressed () {
  randomPhoto();
}
