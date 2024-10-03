import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range; // Set the electric vehicle range
  }

  // Getter for 'range'
  get range() {
    return this._range;
  }

  // Setter for 'range'
  set range(value) {
    this._range = value;
  }

  // Method to clone the EVCar while retaining its attributes
  cloneCar() {
    const Species = super.constructor[Symbol.species];

    // Create a new instance of the correct species with all properties
    return new Species(this.brand, this.motor, this.color, this.range);
  }
}
