class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        cal: 20
    }

    static SIZE_BIG = {
        price: 100,
        cal: 40
    }

    static STUFFING_CHEESE = {
        price: 10,
        cal: 20
    }

    static STUFFING_SALAD = {
        price: 20,
        cal: 5
    }

    static STUFFING_POTATO = {
        price: 15,
        cal: 10
    }

    static TOPPING_SAUCE = {
        price: 15,
        cal: 0
    }

    static TOPPING_MAYO = {
        price: 20,
        cal: 5
    }

    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
        this.toppings = []
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price
        this.toppings.forEach((topping) => {
            price += topping.price;
        })
        return price;
    }

    calculateCal() {
        let cal = this.size.cal + this.stuffing.cal;
        this.toppings.forEach((topping) => {
            cal += topping.cal;
        })
        return cal;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(hamburger);

console.log('Price: ' + hamburger.calculatePrice());
console.log('Calories: ' + hamburger.calculateCal());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Price with double sauce: " + hamburger.calculatePrice());