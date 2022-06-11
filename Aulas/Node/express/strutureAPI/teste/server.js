const express = require('express');
const cors = require('cors');
const App = express();
const bodyParser = require('body-parser');

App.use(bodyParser.json());
App.use(cors());

App.post('/hello', (req, res) => {
  // req.body
  res.status(200).json({greeting: `Hello, ${req.body.name}!`});
});

App.listen(3000, () => console.log('Port 3000 requisition'));