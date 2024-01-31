class Car {
    constructor(brand) {
        this.brand = brand
    }

    present() {
        return `I have a ${this.brand} Car`
    }
}

const car = new Car('Mecedes Benz')
// console.log(car.present())

class Model extends Car {
    constructor(brand, model){
        super(brand)
        this.model = model
    }

    show() {
        return `${this.present()}, it is a ${this.model} model`
    }
}

const model = new Model('Mecedes Benz', 'Toyota')
console.log(model.show())
