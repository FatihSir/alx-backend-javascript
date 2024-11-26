const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(dataPath, 'utf-8'); // Synchronous reading

  const reportParts = [];
  const fileLines = data.trim().split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(studentGroups).reduce(
    (pre, cur) => (pre || []).length + cur.length,
  );
  reportParts.push(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    reportParts.push([
      `Number of students in ${field}: ${group.length}.`,
      'List:',
      group.map((student) => student.firstname).join(', '),
    ].join(' '));
  }

  return reportParts.join('\n');
};

// Root route
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  try {
    const report = countStudents(DB_FILE);
    responseParts.push(report);
    const responseText = responseParts.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  } catch (err) {
    responseParts.push(err instanceof Error ? err.message : err.toString());
    const responseText = responseParts.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 500; // Changed to 500 since there was an error
    res.write(Buffer.from(responseText));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
