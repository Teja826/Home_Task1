const CARCOLOR = Symbol(); 
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    set color(color) {
        this[CARCOLOR] = color;
    }
    get color() {
        return this[CARCOLOR];
    }
    set model(model) {
        this[CARMODEL] = model;
    }
    get model() {
        return this[CARMODEL];
    }
    set make(make) {
        this[CARMAKE] = make;
    }
    get make() {
        return this[CARMAKE];
    }
}
let myCar = new Car();
myCar.color = `Black`;
myCar.model=`Land rover`;
myCar.make=`Jaguar`;

console.log(myCar.make);
console.log(myCar);
// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods