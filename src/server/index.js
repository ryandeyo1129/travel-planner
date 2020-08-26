const projectData = {
  name: 'Ryan',
  age: 26,
  location: 'Boston'
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.options('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.end();
});

// Initialize the main project folder
app.use(express.static('dist'));

// Setup and start server
const port = 8081;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// setup GET route endpoint
app.get('/person', (req, res) => {
  res.send(projectData);
})

module.exports = server;
