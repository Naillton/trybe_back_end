const express = require('express');
const bodyParser = require('body-parser');
const UsersRouter = require('./src/routes/UsersRouter');

const app = express();

app.use(bodyParser.json());
app.use('/users', UsersRouter);

module.exports = app;