const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const App = express();
App.use(cors());
App.use(bodyParser.json());

App.get('/ping', (req, res) => {
  res.status(200).json({message: 'ping'});
});

App.post('/hello', (req, res) => {
  req.body
  res.status(201).json({name: `Hello, ${req.body.name}`})
});

App.post('/greetings', (req, res) => {
  req.body
  req.body.idade > 17 && res.status(200).json({message: `Hello, ${req.body.name}`});
  req.body.idade <= 17 && res.status(401).json({message: 'Unauthorized'});
});

App.put('/users/:name/:age', (req, res) => {
  res.status(200).json({message:` seu nome e ${req.params.name} e sua idade e ${req.params.age}`});
});

App.listen(3000, () => console.log('listen port 3000'));