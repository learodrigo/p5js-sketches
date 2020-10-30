let r0

function setup () {
    createCanvas(windowWidth, windowHeight)
    noStroke()
}

function draw () {
    background(0)
    translate(width / 2, height / 2)

    const inc = 0.005;
    let i = 0

    r0 = 0.25 * width

    while (r0 > 20) {
        r0 -= 10
        fill(255 * (i % 2))

        beginShape()
            for (let a = 0; a < TWO_PI; a += inc) {
                const r = min(1 / abs(sin(a)), 1 / abs(cos(a)))
                const f = 2
                const _r = (r0 + noise((1 + sin(a)) * f, (1 + cos(a)) * f) * r0) * 0.75
                const x = _r * r * sin(a)
                const y = _r * r * cos(a)

                vertex(x, y)
            }
        endShape()

        i++
    }
}

function keyPressed () {
    if (key === 'r') {
        window.location.reload()
    }

    if (key === 's') {
        save()
    }
}
