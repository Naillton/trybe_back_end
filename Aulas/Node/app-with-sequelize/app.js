const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/userRouter');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

module.exports = app;