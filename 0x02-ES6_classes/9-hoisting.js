export class HolbertonClass {
  /**
   * Initializes a HolbertonClass instance
   * @param {Number} year - The year of the class
   * @param {String} location - The location of the class
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Gets the year of the class
   * @returns {Number} - The year of the class
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the class
   * @returns {String} - The location of the class
   */
  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  /**
   * Initializes a StudentHolberton instance
   * @param {String} firstName - The first name of the student
   * @param {String} lastName - The last name of the student
   * @param {HolbertonClass} holbertonClass - The HolbertonClass instance the student belongs to
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student
   * @returns {String} - The full name of the student (first and last name)
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the HolbertonClass instance the student belongs to
   * @returns {HolbertonClass} - The student's HolbertonClass
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets the full description of the student
   * @returns {String} - A string with the student's full name, class year, and class location
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - \
${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Creating instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Creating instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// List of students
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
