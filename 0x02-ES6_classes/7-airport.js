export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Gets the name of the airport
   * @returns {String} - The name of the airport
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the airport
   * @param {String} value - The name of the airport
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the airport code
   * @returns {String} - The code of the airport
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the airport code
   * @param {String} value - The airport code
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Customizes the object string tag for the class instance
   * @returns {String} - The airport code
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
