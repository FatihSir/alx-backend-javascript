const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port the server will listen to
const PORT = 1245;

// Define a route that responds with 'Hello Holberton School!' on the root URL
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app for potential future use (like testing)
module.exports = app;
