const fs = require('fs').promises;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const result = require('./simpsons.json');

const App = express();
App.use(bodyParser.json());
App.use(cors());

App.get('/simpsons', (req, res) => {
  res.status(200).json(result);
});

App.listen(3001, () => console.log('listen in port 3001'));
