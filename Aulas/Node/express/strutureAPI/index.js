const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipesRouter = require('./recipesRouter');
const authMiddleware = require('./auth-middleware');

const App = express();
App.use('/recipes', recipesRouter); // utilizando o router para dimiuir o volume de linhas e funcoes no index.js
App.use(bodyParser.json());
App.use(cors()); // utilizando o cors para liberar acesso da API para outras aplicações
App.use(authMiddleware);

App.get('/fechado', authMiddleware, (req, res) => {
  res.send('closed!');
})

//App.get('/validateToken', (req, res) => {
  //const token = req.headers.authorization;
  //token.length !== 16 && res.status(404).json({message: 'Invalid Token!'});

  //res.status(200).json({message: 'Valid Token!'});
//});

App.listen(3001, () => {
  console.log('App listen to port 3001');
})