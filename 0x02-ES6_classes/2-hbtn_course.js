class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Sets the course name
   * @param {String} name - The name of the course
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('The course name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * Sets the course length
   * @param {Number} length - The duration of the course
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('The course length must be a valid number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
   * Sets the list of students
   * @param {Array} students - The students enrolled in the course
   */
  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('The students field must be an array');
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
