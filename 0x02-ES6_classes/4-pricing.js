import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Sets the pricing amount
   * @param {Number} amount - The monetary amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('The amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * Sets the currency instance
   * @param {Currency} currency - An instance of the Currency class
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('The currency must be a valid instance of the Currency class');
    }
  }

  get currency() {
    return this._currency;
  }

  /**
   * Displays the full price with currency
   * @returns {String} - The full price in the format "amount currency (currency code)"
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Converts the price to a different value based on a conversion rate
   * @param {Number} amount - The amount to be converted
   * @param {Number} conversionRate - The conversion rate to apply
   * @returns {Number} - The converted price
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('The amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('The conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;
