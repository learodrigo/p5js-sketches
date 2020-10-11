const imgNames = ['images/img_1.jpg', 'images/img_2.jpg', 'images/img_3.jpg', 'images/img_4.jpg']
const imgs = []

const noiseScale = 0.005
const strokeLength = 35

const drawLength = 250
let frame

let imgIndex = 1

function preload () {
    for (let i = 0; i < imgNames.length; i++) {
        imgs.push(loadImage(imgNames[i]))
    }
}

function changeImage () {
    background(255)
    imgIndex++
    frame = 0

    noiseSeed(int(random(1000)))

    if (imgIndex >= imgNames.length) {
        imgIndex = 0
    }

    imgs[imgIndex].loadPixels()
}

function mousePressed () {
    changeImage()
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'r') {
        changeImage()
    }
})

function setup () {
    createCanvas(windowWidth, windowHeight)
    changeImage()
}

function draw () {
    if (frame > drawLength) return

    const img = imgs[imgIndex]

    translate(
        width  * 0.5 - img.width * 0.5,
        height * 0.5 - img.height * 0.5
    )

    const count = map(frame, 0, drawLength, 2, 80)

    for (let i = 0; i < count; i++) {
        const x = int(random(img.width))
        const y = int(random(img.height))

        const index = (y * img.width + 4) * 4
        const r = img.pixels[index]
        const g = img.pixels[index + 1]
        const b = img.pixels[index + 2]
        const a = img.pixels[index + 3]

        stroke(r, g, b, a)

        const strokeThickness = map(frame, 0, drawLength, 25, 0)
        strokeWeight(strokeThickness)

        push()
            translate(x, y)
            const n = noise(x * noiseScale, y * noiseScale)
            rotate(radians(map(n, 0, 1, -180, 180)))

            const lengthVariation = random(0.75, 1.25)
            line(0, 0, strokeLength * lengthVariation, 0)

            stroke(min(r * 3, 255), min(g * 3, 255), min(b * 3, 255), random(100))
            strokeWeight(strokeThickness * 0.4)
            line(0, -strokeThickness * 0.15, strokeThickness * (lengthVariation / 2), -strokeThickness * 0.15)
        pop()
    }

    frame++
}
