class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Sets the currency code
   * @param {String} code - The currency code (e.g., USD, EUR)
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Currency code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /**
   * Sets the currency name
   * @param {String} name - The full name of the currency
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Currency name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * Returns the full representation of the currency
   * @returns {String} - A formatted string representing the currency (e.g., "US Dollar (USD)")
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
