const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
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
        res.statusCode = 500;
        res.write(Buffer.from(responseText));
      }
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
