export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Gets the size of the class
   * @returns {Number} - The size of the class
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of the class
   * @param {Number} value - The size of the class
   */
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  /**
   * Gets the location of the class
   * @returns {String} - The location of the class
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of the class
   * @param {String} value - The location of the class
   */
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  /**
   * Defines how the object should be converted when used as a primitive
   * @param {String} hint - Hint indicating the preferred type of conversion ('number', 'string', or default)
   * @returns {Number|String|Object} - The size if number is requested, the location if string is requested, otherwise the object itself
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
