class Building {
  constructor(sqft) {
    // Ensure that the class inheriting from Building overrides evacuationWarningMessage
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Classes extending Building must implement evacuationWarningMessage method');
      }
    }
    this.sqft = sqft;
  }

  /**
   * Sets the square footage of the building
   * @param {Number} sqft - The square footage to set
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage (sqft) must be a number');
    }
    this._sqft = sqft;
  }

  /**
   * Gets the square footage of the building
   * @returns {Number} - The square footage of the building
   */
  get sqft() {
    return this._sqft;
  }
}

export default Building;
