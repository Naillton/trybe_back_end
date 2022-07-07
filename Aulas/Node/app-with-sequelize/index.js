const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

app.listen(3000, () => console.log('rodando na porta 3000'));