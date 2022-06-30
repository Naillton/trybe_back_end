require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const Cep = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.use(errorMiddleware);

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });