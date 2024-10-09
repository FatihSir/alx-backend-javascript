interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Mark',
  lastName: 'Stevenson',
  age: 25,
  location: 'California',
};

const students: Student[] = [student1, student2];

const body = document.querySelector('body') as HTMLBodyElement;
const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

[th1, th2].forEach((th) => {
  th.style.border = '1px solid gray';
  th.style.padding = '0.5rem';
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

students.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  [firstNameCell, locationCell].forEach((td) => {
    td.style.border = '1px solid gray';
    td.style.padding = '0.5rem';
    row.appendChild(td);
  });

  table.appendChild(row);
});

body.appendChild(table);
