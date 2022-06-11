const express = require('express');
const cors = require('cors');
const App = express();
const bodyParser = require('body-parser');

App.use(bodyParser.json());
App.use(cors());

// devemos usar a linha abaixo apenas para ambiente de desenvolvimento
App.use((req, res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);

  next();
});

App.post('/hello', (req, res) => {
  // req.body
  res.status(200).json({greeting: `Hello, ${req.body.name}!`});
});

App.listen(3000, () => console.log('Port 3000 requisition'));