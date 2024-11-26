const fs = require('fs');

const countStudents = (dataPath) => {
  // Check if the file exists and is accessible
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read and process the file content
  const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
  const fileLines = fileContent.split('\n');

  if (fileLines.length < 2) {
    console.log('No students in the database');
    return;
  }

  const headers = fileLines[0].split(','); // Extract headers
  const fieldIndex = headers.length - 1; // Index of the field column
  const studentGroups = {};

  // Process each student's record
  for (const line of fileLines.slice(1)) {
    const record = line.split(',');

    if (record.length !== headers.length) {
      console.log(`Skipping invalid record: ${line}`);
    }

    const field = record[fieldIndex];
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const student = {};
    headers.slice(0, fieldIndex).forEach((key, index) => {
      student[key] = record[index];
    });

    studentGroups[field].push(student);
  }

  // Count and display the students
  const totalStudents = Object.values(studentGroups)
    .reduce((count, group) => count + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const names = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${names}`);
  }
};

module.exports = countStudents;
