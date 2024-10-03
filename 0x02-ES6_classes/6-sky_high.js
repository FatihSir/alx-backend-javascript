import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Retrieves the number of floors
   * @returns {Number} - The number of floors in the building
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building
   * @param {Number} value - The number of floors
   */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  /**
   * Returns a message to evacuate the building
   * @returns {String} - A message to evacuate the building
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
