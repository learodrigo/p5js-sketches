class Crystal {
    constructor (posX, posY) {
        this.x = posX
        this.y = posY
        this.layers = []

        this.createLayers()
    }

    createLayers () {
        layerConstructor.forEach(layer => {
            if (random(1) > layer.weight) {
                this.layers.push(layer.init())
            }
        })
    }

    render () {
        push()
            translate(this.x, this.y)

            this.layers.forEach(layer => {
                layer.render()
            })
        pop()
    }
}
