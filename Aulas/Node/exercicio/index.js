const bodyParser = require('body-parser');
const express = require('express');
const cepRoute = require('./routes/CepRoute');

const app = express();
const PORT = 3000;
const HTTP_OK_STATUS = 200;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ message: 'pong!' });
});

app.use('/cep', cepRoute);

app.listen(PORT, () => console.log('Rodando na porta 3000'));