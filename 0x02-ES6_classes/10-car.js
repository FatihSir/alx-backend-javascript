export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter and setter for 'brand'
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // Getter and setter for 'motor'
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // Getter and setter for 'color'
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Static species getter
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car, keeping the same attributes
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    // Create a new instance using the original car's brand, motor, and color
    return new Species(this.brand, this.motor, this.color);
  }
}
